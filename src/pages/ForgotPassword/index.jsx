import React, { useCallback } from "react";
import styles from './forgot-password.module.css';
import { Link, Redirect, useHistory, } from "react-router-dom";
import { resetPassword } from "../../functions/resetPassword";
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";

export const ForgotPassword = () => {
    const [emailToReset, setEmailToReset] = React.useState("");
    const [loading, setLoading] = React.useState(false);
    const [needToRedirect, setNeedToRedirect] = React.useState(false)
    const history = useHistory();

    const next = useCallback((emailToReset) => {
        setLoading(true);
        resetPassword({email:emailToReset})
            .then(res => res ? setNeedToRedirect(true) : alert("Try Again!"))
            .then(() => setLoading(false));
    },[]);

    return needToRedirect ? (
        <Redirect to={{
            pathname: '/reset-password',
            state: { from: history.location.pathname }
        }}/>
    ):(
        <div className={styles.main_block}>
                <div className={styles.title + ' text text_type_main-medium'}>
                    <p>
                        Восстановление пароля
                    </p>
                </div>
                <form onSubmit={!loading ? (e)=>{ e.preventDefault(); next(emailToReset)} : ''}>
                    <div className={styles.input}>
                        <Input
                            type={'email'}
                            placeholder={'E-mail'}
                            onChange={e => setEmailToReset(e.target.value)}
                            value={emailToReset}
                            name={'email'}
                            error={false}
                            errorText={'Ошибка'}
                            size={'default'}
                        />
                    </div>
                    <div className={styles.button}>
                        <Button type="primary" size="large">
                            {loading ? 'Происходит запрос' : 'Восстановить'}
                        </Button>
                    </div>
                </form>
                <div className={styles.registration_block}>
                    <p className="text text_type_main-small">
                        Вспомнили пароль? <Link to="/login">Войти</Link>
                    </p>
                </div>
        </div>
    )
}