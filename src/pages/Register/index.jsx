import React, { useCallback, useEffect } from "react";
import { Input , Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './register.module.css';
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerNewUser } from "../../services/actions/auth";

export const Register = () => {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordStatus, setPasswordStatus] = React.useState(true);
    const passwordRef = React.useRef(null);
    const dispatch = useDispatch();
    const needToRedirect = useSelector(store => store.profile.registerSuccess)
    const onPasswordClick = () => {
        setTimeout(() => passwordRef.current.focus(), 0)
        setPasswordStatus(!passwordStatus);
    };
    const history = useHistory();
    const redirectToPath = useCallback(
        (path) => {
            history.replace({pathname: path});
        },
        [history]
    );

    useEffect(() => {
        needToRedirect && redirectToPath('/')
    }, [needToRedirect])


    const register = () => {
        let form = {
            email: email,
            password: password,
            name: name
        };
        dispatch(registerNewUser(form));
        alert('ok');
    }
    return(
        <div className={styles.main_block}>
            <div className={styles.title}>
                <p>
                    Регистрация
                </p>
            </div>
            <form onSubmit={register} >
                <div className={styles.input}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => setName(e.target.value)}
                        value={name}
                        name={'name'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={styles.input}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        name={'email'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={styles.input}>
                    <Input
                        type={ passwordStatus? 'password' : 'text'}
                        placeholder={'Пароль'}
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        ref={passwordRef}
                        name={'password'}
                        error={false}
                        errorText={'Ошибка'}
                        size={'default'}
                        icon={ passwordStatus ? 'ShowIcon' : 'HideIcon'}
                        onIconClick={onPasswordClick}
                    />
                </div>
                <div className={styles.button}>
                    <Button type="primary" size="large">
                        Зарегистрироваться
                    </Button>
                </div>
            </form>
            <div className={styles.registration_block}>
                <p className="text text_type_main-small">
                    Уже зарегистрированы? <Link to="/login">Войти</Link>
                </p>
            </div>
        </div>
    )
}