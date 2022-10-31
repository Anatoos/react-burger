import React, { useCallback } from "react";
import styles from './reset-password.module.css';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { acceptResetPassword } from "../../functions/acceptResetPassword";

export const ResetPassword = () => {
    const [code, setCode] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [passwordStatus, setPasswordStatus] = React.useState(true);
    const codeRef = React.useRef(null);
    const pwdRef = React.useRef(null);
    const onPasswordClick = () => {
        setTimeout(() => pwdRef.current.focus(), 0)
        setPasswordStatus(!passwordStatus);
    }
    const history = useHistory();
    const redirectToPath = useCallback(
        (path) => {
            history.replace({pathname: path});
        },
        [history]
    );

    const reset = useCallback((password, code) => {
        setLoading(true)
        acceptResetPassword(password, code )
            .then(res => res ? redirectToPath('/login') : alert("Попробуйте снова"))
            .then(() => setLoading(false));
    },[]);

    return (
        <div className={styles.main_block}>
            <h1>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
            </h1>
            <form onSubmit={!loading ? () => reset(password, code) : () => {}}>
                <div className={styles.input}>
                    <Input
                        type={ passwordStatus ? 'password' : 'text' }
                        placeholder={'Пароль'}
                        onChange={e => setPassword(e.target.value)}
                        icon={ passwordStatus ? 'ShowIcon' : 'HideIcon' }
                        value={password}
                        name={'name'}
                        error={false}
                        ref={pwdRef}
                        onIconClick={onPasswordClick}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={styles.input}>
                    <Input
                        type={'text'}
                        placeholder={'Введите код из письма'}
                        onChange={e => setCode(e.target.value)}
                        value={code}
                        name={'name'}
                        error={false}
                        ref={codeRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div>
                    <Button type="primary" size="large" >
                        {loading ? 'Происходит запрос' : 'Восстановить'}
                    </Button>
                </div>
            </form>
            <div className={styles.infoBlock}>
                <p className="text text_type_main-small">
                    Вспомнили пароль? <Link to="/login">Войти</Link>
                </p>
            </div>
        </div>
    )
}