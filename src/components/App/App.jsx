import React, { useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import { getIngredientData } from "../../services/actions/getIngredient";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ForgotPassword, Home, Ingredient, Login, NotFound404, Profile, Register, ResetPassword } from '../../pages/index'


function App() {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getIngredientData());
    },[])
    const isLoading = useSelector(state => {
        return state.ingredients.ingredientsSuccess});
  return isLoading ? (
      <>
          <Router>
              <AppHeader />
              <Switch>
                  <Route path='/' exact={true} >
                      <Home />
                  </Route>
                  <Route path='/login' exact={true} >
                      <Login />
                  </Route>
                  <Route path='/profile' exact={true} >
                      <Profile />
                  </Route>
                  <Route path='/register' exact={true} >
                      <Register />
                  </Route>
                  <Route path='/forgot-password' exact={true} >
                      <ForgotPassword />
                  </Route>
                  <Route path='/reset-password' exact={true} >
                      <ResetPassword />
                  </Route>
                  <Route path='/ingredient/:id' exact={true} >
                      <Ingredient />
                  </Route>
                  <Route>
                      <NotFound404 />
                  </Route>
              </Switch>
          </Router>
      </>

  ) : <div className={styles.error}>
        Подождите, апи не такое реактивное!
      </div>

}

export default App;
