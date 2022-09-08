import React from "react";
import bcStyles from './BurgerConstructor.module.css';
import {ConstructorElement, DragIcon, CurrencyIcon, Button} from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../Modal/Modal'
import OrderDetails from "../OrderDetails/OrderDetails";
import PropTypes from "prop-types";
import {ingredientType} from "../../types/Ingredient";

const BurgerConstructor = (props) => {

    const data = props.ingredients;
    const result = data.reduce((total, currentValue) => total + currentValue.price, 0);
    const Bun = data.filter((i) => i.type === 'bun');
    const burgerMain = data.filter((i) => i.type !== 'bun');
    const [useModal, setUseModal] = React.useState(false);

    const openModal = () => {
        setUseModal(true);
    }
    const closeModal = () => {
        setUseModal(false);
    }

    return (
        <div className={bcStyles.bc_wrapper}>
            {useModal && (
                    <Modal close={closeModal}>
                        <OrderDetails/>
                    </Modal>
            )}
            <div className={bcStyles.constructor}>
                <div className={bcStyles.bun}>
                    <div className={bcStyles.item}>
                        <ConstructorElement
                            isLocked={true}
                            text={Bun[0].name + ' (верх)'}
                            type='top'
                            price={Bun[0].price}
                            thumbnail={Bun[0].image}
                            />
                    </div>
                </div>
                <div className={bcStyles.list}>

                        {burgerMain.slice(1,8).map ((i , index) =>
                            <div className={bcStyles.item} key={index}>
                                <DragIcon type='primary'/>
                                    <ConstructorElement
                                        text={i.name}
                                        thumbnail={i.image}
                                        price={i.price}
                                    />
                            </div>

                        )}

                </div>
                <div className={bcStyles.bun}>
                    <div className={bcStyles.item}>
                        <ConstructorElement
                            isLocked={true}
                            text={Bun[0].name + ' (низ)'}
                           type='bottom'
                           price={Bun[0].price}
                            thumbnail={Bun[0].image}
                       />
                    </div>
                 </div>
            </div>
            <div className={bcStyles.order_block}>
                <div className={bcStyles.price + ' text text_type_digits-medium'}>
                    <p> {result} </p> <CurrencyIcon type="primary" />
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
BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientType.isRequired).isRequired
};
export default BurgerConstructor;