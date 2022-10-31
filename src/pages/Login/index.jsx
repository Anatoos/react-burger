import React from "react";
import styles from './login.module.css';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, Redirect, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../services/actions/auth";

export const Login = () => {
    const [email, setEmail] = React.useState('');
    const [pwd, setPwd] = React.useState('');
    const [pwdStatus,setPwdStatus] = React.useState(true);
    const emailRef = React.useRef(null);
    const pwdRef = React.useRef(null);
    const needToRedirect = useSelector(store => store.profile.loginInfoSuccess)
    const onPasswordClick = () => {
        setTimeout(() => pwdRef.current.focus(), 0)
        setPwdStatus(!pwdStatus);
    }
    const location = useLocation();
    const refer = location.state && location.state.from;
    const dispatch = useDispatch();
    const enter = (e) => {
        e.preventDefault();
        let form = {
            email: email,
            password: pwd
        };
        dispatch(logIn(form));
    }

    return(
            needToRedirect === true ? (
            <Redirect to={refer}/>
            ) : (
            <div className={styles.main_block}>
                <h1>
                    <p className="text text_type_main-medium">
                        Вход
                    </p>
                </h1>
                <form onSubmit={enter}>
                    <div className={styles.input}>
                        <Input
                            type={'email'}
                            placeholder={'E-mail'}
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            name={'email'}
                            error={false}
                            ref={emailRef}
                            errorText={'Ошибка'}
                            size={'default'}
                        />
                    </div>
                    <div className={styles.input}>
                        <Input
                            type={ pwdStatus ? 'password' : 'text' }
                            placeholder={'Пароль'}
                            onChange={e => setPwd(e.target.value)}
                            icon={ pwdStatus ? 'ShowIcon' : 'HideIcon' }
                            value={pwd}
                            name={'name'}
                            error={false}
                            ref={pwdRef}
                            onIconClick={onPasswordClick}
                            errorText={'Ошибка'}
                            size={'default'}
                        />
                    </div>
                    <div className={styles.button}>
                        <Button type="primary" size="large">
                            Войти
                        </Button>
                    </div>
                </form>
                <div className={styles.registration_block}>
                    <p className="text text_type_main-small">
                        Вы новый пользователь? <Link to="/register">Зарегистрироваться</Link>
                    </p>
                    <p className="text text_type_main-small">
                        Забыли пароль? <Link to="/forgot-password">Восстановить пароль</Link>
                    </p>
                </div>
            </div>
            )
    )
}