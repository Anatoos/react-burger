import React, {ChangeEvent, FormEvent, useCallback, useEffect} from "react";
import { Input , Button} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './register.module.css';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "../../types/hooks";
import { registerNewUser } from "../../services/actions/auth";

export const Register = () => {
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [passwordStatus, setPasswordStatus] = React.useState<boolean>(true);
    const passwordRef = React.useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();
    const needToRedirect = useSelector((store: any) => store.profile.registerSuccess)
    const onPasswordClick = () => {
        setPasswordStatus(!passwordStatus);
    };
    const navigate = useNavigate();
    const redirectToPath = useCallback(
        (path) => {
            navigate({pathname: path});
        },
        [navigate]
    );

    useEffect(() => {
        needToRedirect && redirectToPath('/')
    }, [needToRedirect])


    const register = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = {
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
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
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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