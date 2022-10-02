import React, { useRef, useState } from "react";
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import IngredientCard from './IngredientCard/IngredientCard'
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CURRENT_ITEM, GET_CURRENT_ITEM } from "../../services/actions/currentItem";
import { SET_TAB } from "../../services/actions/tabs";



const BurgerIngredients = () => {
    const activeModal = useSelector(state => state.currentItem.activeModal)
    const data = useSelector( state => state.ingredients.ingredientsData)
    const dispatch = useDispatch();
    const ref = useRef(null);
    const refBun = useRef(null);
    const refSauce = useRef(null);
    const refMain = useRef(null);
    const [height, setHeight] = useState(null);



    const tabPosition = {
        bun: 0,
        sauce: 0,
        main: 0,
        activeTab: 'bun'
    }
    const onScroll = () => {
        height === null && setHeight(ref.current.getBoundingClientRect().y);
        tabPosition.bun = refBun.current.getBoundingClientRect().y;
        tabPosition.sauce = refSauce.current.getBoundingClientRect().y;
        tabPosition.main = refMain.current.getBoundingClientRect().y;

        if(tabPosition.main < height){
            dispatch({
                type: SET_TAB,
                tab: 'main'
            })
        } else {
            if(tabPosition.sauce < height) {
                dispatch({
                    type: SET_TAB,
                    tab: 'sauce'
                })
            } else {
                dispatch({
                    type: SET_TAB,
                    tab: 'bun'
                })
            }
        }
    }
    const setActiveIngredientId = (id) => {
        dispatch({
            type:GET_CURRENT_ITEM,
            data: findElement(id)
        })
    }

    const closeModal = () => {
        dispatch({
            type: CLEAR_CURRENT_ITEM
        })
    }

    const findElement = (id) => {
        return data.find( item => item._id === id)
    }

    const Tabs = () => {
        const current = useSelector(state => state.tab.activeTab)
        console.log(current);
        return (
            <div className={styles.tabs}>
                <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                    Булки
                </Tab>
                <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="main" active={current === 'main'}  onClick={setCurrent}>
                    Начинки
                </Tab>
            </div>
        )
    }

    const setCurrent = (current) => {
        if (current === 'bun') refBun.current.scrollIntoView(true);
        if (current === 'sauce') refSauce.current.scrollIntoView(true);
        if (current === 'main') refMain.current.scrollIntoView(true);
    console.log(current);
    };
    return (
        <div>
            {activeModal && (
                <Modal title="Детали ингредиента" close={closeModal}>
                    <IngredientDetails/>
                </Modal>
            )}
            <div className={styles.title}>
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>
            </div>
            <div className={styles.tabs} >
                <Tabs/>
            </div>
            <div className={styles.ingredients} ref={ref} onScroll={onScroll}>
                <div className={styles.title}>
                    <p className="text text_type_main-medium" ref={refBun} >
                        Булки
                    </p>
                </div>
                <div className={styles.ingredients_list}>
                    {data.map((element) => (
                        element.type === 'bun' && (
                            <IngredientCard
                                key={element._id}
                                item={element}
                                priceClass={styles.item__price}
                                class={styles.item}
                                onClick={setActiveIngredientId}/>)
                    ))}
                </div>
                <div className={styles.title} ref={refSauce} >
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>
                <div className={styles.ingredients_list}>
                    {data.map((element, index) => (
                        element.type === 'sauce' && (
                            <IngredientCard
                                key={index}
                                item={element}
                                priceClass={styles.item__price}
                                class={styles.item}
                                onClick={setActiveIngredientId}/>)
                    ))}
                </div>
                <div className={styles.title} ref={refMain} >
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                <div className={styles.ingredients_list}>
                    {data.map((element, index) => (
                        element.type === 'main' && (
                            <IngredientCard
                                key={index}
                                item={element}
                                priceClass={styles.item__price}
                                class={styles.item}
                                onClick={setActiveIngredientId}/>)
                    ))}
                </div>
            </div>
        </div>
    )
}


export default BurgerIngredients;