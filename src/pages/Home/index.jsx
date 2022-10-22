import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import styles from "../../components/App/App.module.css";
import BurgerIngredients from "../../components/BurgerIgredients/BurgerIngredients";
import BurgerConstructor from "../../components/BurgerConstructor/BurgerConstructor";
import React from "react";


export const Home = () => {
    return(
        <DndProvider  backend={HTML5Backend}>
            <section>
                <div className={styles.wrapper}>
                    <div className={styles.content}>
                        <BurgerIngredients />
                        <BurgerConstructor />
                    </div>
                </div>
            </section>
        </DndProvider>
    )
};