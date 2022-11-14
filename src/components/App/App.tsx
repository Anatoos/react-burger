import React, { useEffect } from 'react';
import styles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import { getIngredientData } from "../../services/actions/getIngredient";
import { useDispatch, useSelector } from "react-redux";
import {Route, Routes, useLocation, useNavigate} from "react-router-dom";
import { ProtectedRoute, ProtectedForAnyRoute, ProtectedForAuthRoute} from "../ProtectedRoute";
import { ForgotPassword, Home, Ingredient, Login, NotFound404, Profile, Register, ResetPassword } from '../../pages'
import Modal from "../Modal/Modal";
import {CLEAR_CURRENT_ITEM} from "../../services/actions/currentItem";

function App() {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const background = location.state && location.state.background;

    const onCloseModal = () => {
        navigate(-1);
            dispatch({
                type: CLEAR_CURRENT_ITEM
            })
    };


    useEffect(()=>{
        dispatch(getIngredientData());
    },[dispatch])
    const isLoading = useSelector((state: any) => {
        return state.ingredients.ingredientsSuccess
   });



    return isLoading ? (
      <>
          <AppHeader />
              <section>
                  <div className={styles.wrapper}>
                      <div className={styles.content}>
                          <Routes location={ background || location } >
                              <Route path='/' element={ <Home />} />
                              <Route path="/login" element={
                                    <ProtectedForAuthRoute>
                                        <Login />
                                    </ProtectedForAuthRoute>} />
                              <Route path='/profile' element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>} />
                              <Route path='/register' element={
                                    <ProtectedForAuthRoute>
                                        <Register />
                                    </ProtectedForAuthRoute>} />
                              <Route path='/forgot-password' element={
                                    <ProtectedForAuthRoute >
                                        <ForgotPassword />
                                    </ProtectedForAuthRoute>} />
                              <Route path='/reset-password' element={
                                    <ProtectedForAnyRoute >
                                        <ResetPassword />
                                    </ProtectedForAnyRoute> } />
                              <Route path='/ingredients/:id' element={
                                        <Ingredient />} />
                              <Route path='*' element={<NotFound404 />} />
                          </Routes>
                          {background && (
                              <Routes>
                                  <Route path='/ingredients/:id' element={
                                      <Modal close={onCloseModal}>
                                          <Ingredient/>
                                      </Modal>
                                  } />
                              </Routes>
                          )}
                      </div>
                  </div>
              </section>
          </>
  ) : <div className={styles.error}>
        Подождите, апи не такое реактивное!
      </div>

}

export default App;