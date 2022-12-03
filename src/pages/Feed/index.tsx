import React, { FC, useCallback, useEffect, useMemo } from "react";
import { FeedInfo } from "./FeedInfo";
import { FeedItem } from "./FeedItem";
import styles from './Feed.module.css'
import { useDispatch } from "../../types/hooks";
import { useSelector } from "../../types/hooks";
import { TOrder, TOrdersStatuses } from "../../types/WSData";
import { CLEAR_CURRENT_ORDER_ID, GET_CURRENT_ORDER_ID } from "../../services/actions/currentItem";
import Modal from "../../components/Modal/Modal";
import { FeedId } from "../../components/FeedId";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/wsConnect";

export const  Feed:FC = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: WS_CONNECTION_START });
        return () => {
            dispatch({ type: WS_CONNECTION_CLOSED });
        };
    }, [dispatch]);

    const orders = useSelector((store)=> store.wsConnect.data.orders);
    const completeToday = useSelector((store)=> store.wsConnect.data.totalToday);
    const completeAll = useSelector((store)=> store.wsConnect.data.total);

    const activeModal = useSelector((store) => store.currentItem.activeModal)

    const ordersStatuses: TOrdersStatuses = useMemo(() => {
        let orderStatuses : TOrdersStatuses  = {
            created: [],
            pending: [],
            done:[]
        };
        if(orders.length > 0  ) {
            orders.map((order : TOrder) => {
                if (order.status === 'created') orderStatuses.created = [...orderStatuses.created, order.number];
                else if (order.status === 'pending') orderStatuses.pending = [...orderStatuses.pending, order.number];
                else orderStatuses.done = [...orderStatuses.done, order.number];
            })
        }

        return orderStatuses;
    }, [orders]);

    const closeModal = useCallback(()=> {
        window.history.pushState(null,'','/');
        dispatch({
            type: CLEAR_CURRENT_ORDER_ID
        })
    },[window.history]);

    const setOrderNumber = useCallback((number)=>{
        dispatch({
            type: GET_CURRENT_ORDER_ID,
            data: number
        })
        window.history.pushState(null,'','/feed/' + number);
    },[])

    return (
        <div>
            <main>
                {activeModal && (
                    <Modal title="Детали ингредиента" close={closeModal}>
                        <FeedId/>
                    </Modal>
                )}
                <h1 className="text text_type_main-large">Лента заказов</h1>
                <div className={styles.Wrapper}>
                    <section className={styles.column}>
                        {orders.map((elem:TOrder)=>{
                            return (<FeedItem key={elem._id} elem={elem} onClick={setOrderNumber}/>)
                        })}
                    </section>
                    <section className={styles.mainContentBlock}>
                        <FeedInfo completeAll={completeAll} completeToday={completeToday} statuses={ordersStatuses}/>
                    </section>
                </div>
            </main>
        </div>
    )
}