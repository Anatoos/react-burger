import React from "react";
import { Input , Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './register.module.css';
import { Link } from "react-router-dom";


export const Register = () => {
    const [name, setName] = React.useState('Имя');
    const [email, setEmail] = React.useState('E-mail');
    const [password, setPassword] = React.useState('Пароль');
    const [passwordStatus, setPasswordStatus] = React.useState(true);
    const passwordRef = React.useRef(null);
    const onPasswordClick = () => {
        setTimeout(() => passwordRef.current.focus(), 0)
        setPasswordStatus(!passwordStatus);
    };

    return(
        <div className={styles.main_block}>
            <div className={styles.title}>
                <p>
                    Регистраци
                </p>
            </div>
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
                <Button type="primary" size="large" onClick={register}>
                    Зарегистрироваться
                </Button>
            </div>
            <div className={styles.registration_block}>
                <p className="text text_type_main-small">
                    Уже зарегистрированы? <Link to="/login">Войти</Link>
                </p>
            </div>
        </div>
    )
}