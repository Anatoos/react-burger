import React, { useRef } from "react";
import styles from "../BurgerConstructor.module.css";
import { ConstructorElement} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { ingredientType } from "../../../types/Ingredient";
import PropTypes from "prop-types";

const selectedItems = (props) => {
    const selectedItemId = props.item.uid;
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const ref = useRef(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [{opacityItem}, drag] = useDrag({
        type: 'selectedItem',
        item: {selectedItemId, ref},
        collect: monitor => ({
            opacityItem: monitor.isDragging() ? 0.4 : 1
        })
    });
    drag(ref);

    return (
        <div className={styles.selected_item} draggable style={{opacityItem}} ref={ref}>
            <ConstructorElement
                text={props.item.name}
                price={props.item.price}
                thumbnail={props.item.image_mobile}
                handleClose={() => props.dropItem(props.item.uid)}
            />
        </div>
    )
}

selectedItems.propTypes = {
    item: ingredientType.isRequired,
    dropItem: PropTypes.func.isRequired,
}

export default selectedItems;