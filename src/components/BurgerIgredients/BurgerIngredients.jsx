import React from "react";
import biStyles from './BurgerIngredients.module.css';
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal'
import IngredientDetails from '../IngredientDetails/IngredientDetails'
import IngredientCard from './IngredientCard/IngredientCard'
import PropTypes from "prop-types";
import {ingredientType} from "../../types/Ingredient";


const Tabs = () => {
    const [current, setCurrent] = React.useState('one')
    return (
        <div className={biStyles.tabs}>
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


const BurgerIngredients = (props) => {
    const [activeModal, setActiveModal] = React.useState(false);
    const [activeIngredient, setActiveIngredient] = React.useState({})
    const data = props.ingredients;

    const setActiveIngredientId = (id) => {
        setActiveIngredient(findElement(id));
        setActiveModal(true);
    }

    const closeModal = () => {
        setActiveModal(false);
    }

    const findElement = (id) => {
        return data.find( item => item._id === id)
    }

    return (
        <div>
            {activeModal && (
                <Modal title="Детали ингредиента" close={closeModal}>
                    <IngredientDetails data={activeIngredient} />
                </Modal>
            )}
            <div className={biStyles.title}>
                <p className="text text_type_main-large">
                    Соберите бургер
                </p>
            </div>
            <div className={biStyles.tabs}>
                <Tabs/>
            </div>
            <div className={biStyles.ingredients}>

                <div className={biStyles.title}>
                    <p className="text text_type_main-medium">
                        Булки
                    </p>
                </div>
                <div className={biStyles.ingredients_list}>
                    {data.map((element) => (
                        element.type === 'bun' && (
                            <IngredientCard key={element._id} item={element} priceClass ={biStyles.item__price} class={biStyles.item} onClick={setActiveIngredientId}/>)
                    ))}
                </div>
                <div className={biStyles.title}>
                    <p className="text text_type_main-medium">
                        Соусы
                    </p>
                </div>
                <div className={biStyles.ingredients_list}>
                    {data.map((element, index) => (
                        element.type === 'sauce' && (
                            <IngredientCard key={index} item={element} priceClass ={biStyles.item__price} class={biStyles.item}  onClick={setActiveIngredientId}/>)
                    ))}
                </div>
                <div className={biStyles.title}>
                    <p className="text text_type_main-medium">
                        Начинки
                    </p>
                </div>
                <div className={biStyles.ingredients_list}>
                    {data.map((element, index) => (
                        element.type === 'main' && (
                            <IngredientCard key={index} item={element} priceClass ={biStyles.item__price} class={biStyles.item}  onClick={setActiveIngredientId}/>)
                    ))}
                </div>
            </div>
        </div>
    )
}

BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType.isRequired).isRequired
};

export default BurgerIngredients;