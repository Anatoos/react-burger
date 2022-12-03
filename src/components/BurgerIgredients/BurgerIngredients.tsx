import React, { useRef, useState } from "react";
import styles from './BurgerIngredients.module.css';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components'
import IngredientCard from './IngredientCard/IngredientCard'
import { useDispatch, useSelector } from "../../types/hooks";
import { GET_CURRENT_ITEM } from "../../services/actions/currentItem";
import { SET_TAB } from "../../services/actions/tabs";
import {useNavigate, useLocation} from "react-router-dom";
import {TIngredient, TSelectedIngredients} from "../../types/Ingredient";


const BurgerIngredients = () => {
    const data = useSelector( (state: any) => state.ingredients.ingredientsData)
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement | any>(null);
    const refBun = useRef<HTMLDivElement | any>(null);
    const refSauce = useRef<HTMLDivElement | any>(null);
    const refMain = useRef<HTMLDivElement | any>(null);
    const [height, setHeight] = useState<number>(0);
    const location = useLocation();
    const navigate = useNavigate();


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
    const setActiveIngredientId = (id: string) => {

        dispatch({
            type:GET_CURRENT_ITEM,
            data: findElement(id)
        })
        navigate(`/ingredients/${id}`, {state: { background: location }});
    }

    const findElement = (id: string) => {
        return data.find( (item: TSelectedIngredients) => item._id === id)
    }

    const Tabs = () => {
        const current = useSelector((state: any) => state.tab.activeTab)
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

    const setCurrent = (current: string) => {
        if (current === 'bun') refBun.current.scrollIntoView(true);
        if (current === 'sauce') refSauce.current.scrollIntoView(true);
        if (current === 'main') refMain.current.scrollIntoView(true);
    };
    return (
        <div>
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
                    {data.map((element: TIngredient & { priceClass: string }) => (
                        element.type === 'bun' && (
                            <IngredientCard
                                key={element._id}
                                item={element}
                                priceClass={styles.item__price}
                                classProps={styles.item}
                                onClick={setActiveIngredientId}/>)
                    ))}
                </div>
                <div className={styles.title} ref={refSauce} >
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>
                <div className={styles.ingredients_list}>
                    {data.map((element: TIngredient & { priceClass: string }) => (
                        element.type === 'sauce' && (
                            <IngredientCard
                                key={element._id}
                                item={element}
                                priceClass={styles.item__price}
                                classProps={styles.item}
                                onClick={setActiveIngredientId}/>)
                    ))}
                </div>
                <div className={styles.title} ref={refMain} >
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                <div className={styles.ingredients_list}>
                    {data.map((element: TIngredient & { priceClass: string }) => (
                        element.type === 'main' && (
                            <IngredientCard
                                key={element._id}
                                item={element}
                                priceClass={styles.item__price}
                                classProps={styles.item}
                                onClick={setActiveIngredientId}/>)
                    ))}
                </div>
            </div>
        </div>
    )
}


export default BurgerIngredients;