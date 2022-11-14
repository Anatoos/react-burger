import React, {FC} from "react";
import { Counter, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient} from "../../../types/Ingredient";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

type TProps = {
    onClick: (setActiveIngredientId: string) => void;
    item: TIngredient;
    classProps: string;
    priceClass: string;
}
const IngredientCard: FC<TProps> = (props) => {
    const {onClick, item, priceClass, classProps } = props
    const [{opacity}, ref] = useDrag({
        type: 'item',
        item: item,
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.4 : 1
        })
    });
    const selectedBun = useSelector((state: any) => state.constructorOrder.selectedBun)
    const count = item.type === 'bun' ? (item._id === selectedBun._id ? 2 : 0) : item.count;
    return(
        <div className={classProps} onClick={() => onClick(item._id)} draggable ref={ref} style={{opacity}}>
            {count !== 0 && (<Counter count={count || 0}/>)}
            <img alt={item.name} src={item.image}/>
            <div className={priceClass}>
                <p className="text text_type_digits-default">
                    {item.price} &nbsp;
                </p>
                <CurrencyIcon type="primary"/>
            </div>
            <p className="text text_type_main-default">
                {item.name}
            </p>
        </div>
    )};

export default IngredientCard;