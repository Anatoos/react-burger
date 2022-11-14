import React, {ChangeEvent, FormEvent, useCallback} from "react";
import styles from './reset-password.module.css';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { acceptResetPassword } from "../../functions/acceptResetPassword";
import {TCallbackVoid, TSubmitCallback} from "../../types/Callback";


type TCallbackResetPass = (pwd:string, code:string) => void


export const ResetPassword = () => {
    const [code, setCode] = React.useState<string>('');
    const [loading, setLoading] = React.useState<boolean>(false);
    const [password, setPassword] = React.useState<string>('');
    const [passwordStatus, setPasswordStatus] = React.useState<boolean>(true);
    const codeRef = React.useRef(null);
    const pwdRef = React.useRef(null);
    const onPasswordClick = useCallback<TCallbackVoid>(() => {
        setPasswordStatus(!passwordStatus);
    }, [passwordStatus])
    const navigate = useNavigate();
    const redirectToPath = useCallback<TSubmitCallback>(
        (path) => {
            navigate({pathname: path});
        },
        [navigate]
    );

    const reset = useCallback<TCallbackResetPass>((password, code) => {
        setLoading(true)
        acceptResetPassword(password, code )
            .then(res => res ? redirectToPath('/login') : alert("Попробуйте снова"))
            .then(() => setLoading(false));
    },[password, code]);

    const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        reset(password, code);
    };

    return (
        <div className={styles.main_block}>
            <h1>
                <p className="text text_type_main-medium">
                    Восстановление пароля
                </p>
            </h1>
            <form onSubmit={handleFormSubmit}>
                <div className={styles.input}>
                    <Input
                        type={ passwordStatus ? 'password' : 'text' }
                        placeholder={'Пароль'}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
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