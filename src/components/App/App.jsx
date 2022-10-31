import React, { useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import { getIngredientData } from "../../services/actions/getIngredient";
import { useDispatch, useSelector } from "react-redux";
import {  Route, Switch } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute";
import { ForgotPassword, Home, Ingredient, Login, NotFound404, Profile, Register, ResetPassword } from '../../pages'

function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getIngredientData());
    },[dispatch])
    const isLoading = useSelector(state => {
        return state.ingredients.ingredientsSuccess});



    return isLoading ? (
      <>
          <AppHeader />
              <section>
                  <div className={styles.wrapper}>
                      <div className={styles.content}>
                          <Switch >
                              <Route path='/' exact={true} >
                                  <Home />
                              </Route>
                              <Route path='/login' exact={true} >
                                  <Login />
                              </Route>
                              <ProtectedRoute path='/profile' exact={true} >
                                  <Profile />
                              </ProtectedRoute>
                              <Route path='/register' exact={true} >
                                  <Register />
                              </Route>
                              <Route path='/forgot-password' exact={true} >
                                  <ForgotPassword />
                              </Route>
                              <Route path='/reset-password' exact={true} >
                                  <ResetPassword />
                              </Route>
                              <Route path='/ingredients/:id'>
                                  <Ingredient />
                              </Route>
                              <Route>
                                  <NotFound404 />
                              </Route>
                          </Switch>
                      </div>
                  </div>
              </section>
          </>
  ) : <div className={styles.error}>
        Подождите, апи не такое реактивное!
      </div>

}

export default App;
