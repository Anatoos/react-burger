import React, { useMemo } from "react";
import styles from './BurgerConstructor.module.css';
import { ConstructorElement, CurrencyIcon, Button } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal'
import OrderDetails from "../OrderDetails/OrderDetails";
import { useDispatch, useSelector } from "react-redux";
import { getOrderIdReq } from "../../services/actions/getOrderIdReq";
import { CLEAR_ORDER_ID } from "../../services/actions/orderId";
import { useDrop } from "react-dnd";
import {
    CHANGE_POSITION, CLEAR_BASKET,
    DROP_HOVER_POSITION,
    DROP_ITEM,
    SET_BUN,
    SET_HOVER_POSITION,
    SET_ITEM
} from "../../services/actions/constructor";
import {CLEAR_COUNT, DECREASE_ITEM_COUNT, INCREASE_ITEM_COUNT} from "../../services/actions/ingredient";
import SelectedItems from "./SelectedItems/SelectedItems";
import { v4 as uuidv4 } from 'uuid';

const BurgerConstructor = () => {
    const bun = useSelector(state => state.constructorOrder.selectedBun);
    const selectedItems = useSelector(state => state.constructorOrder.selectedItems);
    const orderId = useSelector(state => state.orderId.orderId);
    const loadingComplete = useSelector(state => state.orderId.orderIdSuccess);
    const hoverPosition = useSelector(state => state.constructorOrder.hoverBoundingRect)
    const dispatch = useDispatch();

    const [{opacity}, dropTarget] = useDrop({
        accept: "item",
        drop(item) {
            onDropHandler(item)
        },
        collect: monitor => ({
            opacity: monitor.isOver() ? 0.4 : 1
        })
    });

    const [, dropTargetSort] = useDrop({
        accept: "selectedItem",
        drop() {
            dispatch({
                type: DROP_HOVER_POSITION,
                position: 0
            })
        },
        hover(item, monitor) {
            if (hoverPosition === 0) {
                dispatch({
                    type: SET_HOVER_POSITION,
                    position: item.ref.current.getBoundingClientRect().top
                })
            }
            const clientOffset = monitor.getClientOffset()
            const hoverClientY = clientOffset.y - hoverPosition
            const changePosition = Math.floor(hoverClientY/80)
            if (changePosition!==0){
                dispatch({
                    type: CHANGE_POSITION,
                    id: item.selectedItemId,
                    difference: changePosition,
                });
                dispatch(
                    dispatch({
                        type: SET_HOVER_POSITION,
                        position: hoverPosition + changePosition * 80
                    })
                )
            }
        }
    });

    const onDropHandler = (item) => {
        if (item.type === 'bun') {
            dispatch({
                type: SET_BUN,
                data: item
            })
        } else {
            dispatch({
                type: INCREASE_ITEM_COUNT,
                id : item._id
            })
            const uid = uuidv4();
            dispatch({
                type: SET_ITEM,
                data: item,
                uid: uid
            });
        }
    }

    const dropItem = (itemId) => {
        dispatch({
            type: DECREASE_ITEM_COUNT,
            id: itemId
        })
        dispatch({
            type: DROP_ITEM,
            id: itemId
        })
    }

    const closeModal = () => {
        dispatch({
            type: CLEAR_ORDER_ID
        });
        dispatch({
            type: CLEAR_BASKET
        })
        dispatch({
            type: CLEAR_COUNT
        })
    }

    const getSum = () => {
        const bunSum = bun.price === undefined ? 0 : bun.price*2;
        const selectedItemsSum = selectedItems.length !== 0 ? selectedItems.reduce(function(sum, current) {
            return current!== undefined ? sum + current.price : sum;
        },0) : 0
        return bunSum + selectedItemsSum;
    }
    const sum = useMemo(() =>getSum(), [bun, selectedItems])

    const getOrderId = () => {
        let result = {
            ingredients: []
        };
        if(bun._id !== undefined) {
            result.ingredients.push(bun._id);
        } else {
            alert("Добавьте булку!");
            return;
        }
        selectedItems.map((item) => result.ingredients.push(item._id));
        result.ingredients.push(bun._id);

        dispatch(getOrderIdReq(result));
    }

    const openModal = () => {
        getOrderId();
    }
    return (

        <div className={styles.bc_wrapper}>
            {orderId !== 0 && loadingComplete && (
                <Modal close={closeModal}>
                    <OrderDetails number={orderId}/>
                </Modal>
            )}
            <div ref={dropTarget} style={{opacity}}>
                {bun.name === undefined && selectedItems.length < 1 && (
                    <div>
                        <p className="text text_type_main-large">
                            Перенесите сюда ингредиенты для бургера
                        </p>
                    </div>
                )}
                {bun.name !== undefined && (
                <div className={styles.bun}>
                    <div className={styles.item}>
                        <ConstructorElement
                            isLocked={true}
                            text={bun.name + ' (верх)'}
                            type='top'
                            price={bun.price}
                            thumbnail={bun.image}
                            />
                    </div>
                </div>
                )}
                {selectedItems.length > 0 && (
                <div className={styles.list} ref={dropTargetSort}>
                    <div className={styles.item}>
                        {selectedItems.map ((item) => (
                                    <SelectedItems
                                        key={item.uid}
                                        item={item}
                                        dropItem={dropItem}
                                    />
                        ))}
                    </div>
                </div>
                )}
                {bun.name !== undefined && (
                <div className={styles.bun}>
                    <div className={styles.item}>
                        <ConstructorElement
                            isLocked={true}
                            text={bun.name + ' (низ)'}
                            type='bottom'
                            price={bun.price}
                            thumbnail={bun.image}
                       />
                    </div>
                 </div>
                )}
            </div>
            <div className={styles.order_block}>
                <div className={styles.price + ' text text_type_digits-medium'}>
                    <p> {sum} </p> <CurrencyIcon type="primary" />
                </div>
                <div className='text text_type_main-medium'>
                    <Button type="primary" size="medium" onClick={openModal}>
                        Оформить заказ
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BurgerConstructor;