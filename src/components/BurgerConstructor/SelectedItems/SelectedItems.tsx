import React, { FC, useRef } from "react";
import styles from "../BurgerConstructor.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { TSelectedIngredients } from "../../../types/Ingredient";

type TProps = {
    item: TSelectedIngredients;
    dropItem: (itemId: string) => void;
}

const SelectedItems: FC<TProps> = (props) => {
    const {item, dropItem} = props
    const selectedItemId = item.uid;
    const ref = useRef(null);
    const [{opacity}, drag] = useDrag({
        type: 'selectedItem',
        item: {selectedItemId, ref},
        collect: monitor => ({
            opacity: monitor.isDragging() ? 0.4 : 1
        })
    });
    drag(ref);

    return (
        <div className={styles.selected_item} draggable style={{opacity}} ref={ref}>
            <DragIcon type='primary'/>
            <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image_mobile}
                handleClose={() => dropItem(item.uid)}
            />
        </div>
    )
}

export default SelectedItems;