import React, { useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from "../BurgerIgredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { getIngredientData } from "../../services/actions/getIngredient";
import { useDispatch, useSelector } from "react-redux";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getIngredientData());
    },[])
    const isLoading = useSelector(state => {
        return state.ingredients.ingredientsSuccess});
  return isLoading ? (
      <>
          <AppHeader />
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
      </>

  ) : <div className={styles.error}>
        Подождите, апи не такое реактивное!
      </div>

}

export default App;
