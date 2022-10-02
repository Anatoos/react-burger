import React, { useRef, useState } from "react";
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import IngredientCard from './IngredientCard/IngredientCard'
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_CURRENT_ITEM, GET_CURRENT_ITEM } from "../../services/actions/currentItem";



const Tabs = () => {
    const [current, setCurrent] = useState('one')
    return (
        <div className={styles.tabs}>
            <Tab value="one" active={current === 'one'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}


const BurgerIngredients = () => {
    const activeModal = useSelector(state => state.currentItem.activeModal)
    const data = useSelector( state => state.ingredients.ingredientsData)
    const dispatch = useDispatch();
    const ref = useRef(null);
    const refBun = useRef(null);
    const refSauce = useRef(null);
    const refMain = useRef(null);


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
            <div className={styles.tabs}>
                <Tabs/>
            </div>
            <div className={styles.ingredients}>

                <div className={styles.title} ref={ref}>
                    <p className="text text_type_main-medium" ref={refBun}>
                        Булки
                    </p>
                </div>
                <div className={styles.ingredients_list}>
                    {data.map((element) => (
                        element.type === 'bun' && (
                            <IngredientCard key={element._id} item={element} priceClass={styles.item__price} class={styles.item} onClick={setActiveIngredientId}/>)
                    ))}
                </div>
                <div className={styles.title} ref={refSauce}>
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
                <div className={styles.title} ref={refMain}>
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