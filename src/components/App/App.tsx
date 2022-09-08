import React, {useState, useEffect} from 'react';
import appStyles from './App.module.css';
import AppHeader from '../AppHeader/AppHeader';
import BurgerIngredients from "../BurgerIgredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

function App() {
  const [ storage , setStorage ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect( () => {
      const api = 'https://norma.nomoreparties.space/api/ingredients';
          fetch(api)
              .then(response => {
                  if (response.ok) {
                      return response.json()
                  } else { console.log('response is not ok')}
              })
              .then(storage => {
                  setStorage(storage.data);
                  setIsLoading(true);
              })
              .catch(error => {console.log(error.message + 'loading data is not ok') })
      }, []);
  return isLoading ? (
      <>
          <AppHeader />
          <section>
              <div className={appStyles.wrapper}>
                  <div className={appStyles.content}>
                      { storage !== undefined ? <BurgerIngredients ingredients={storage} /> : false }
                      { storage !== undefined ? <BurgerConstructor ingredients={storage} /> : false }
                  </div>
              </div>
          </section>
      </>

  ) : <div className={appStyles.error}>
        Подождите, апи не такое реактивное!
      </div>

}

export default App;
