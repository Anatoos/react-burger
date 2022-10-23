import React, {useCallback, useEffect}  from "react";
import styles from './profile.module.css';
import { Button, Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeUserInfo, getUserInfo, logOut, refreshToken } from "../../services/actions/auth";
import { getCookie } from "../../functions/cookie";


export const Profile = () => {
    const MENU_LINKS = [
        {
            name: 'Профиль',
            link: '/profile'
        },
        {
            name: 'История заказов',
            link: '/profile/orders'
        },
        {
            name: 'Выход',
            link: '/login'
        }
    ];
    const user = useSelector(store => store.profile.user);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(true);
    const [isDefault, setIsDefault] = React.useState(true)
    const emailRef = React.useRef(null);
    const pwdRef = React.useRef(null);
    const nameRef = React.useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    const redirectToPath = useCallback(
        (path) => {
            history.replace({pathname: path});
        },
        [history]
    );

    useEffect(() => {
        if(!localStorage.getItem('refreshToken')){
            redirectToPath('/login');
        } else {
            if (user !== {}) {
                if (getCookie('token') === undefined) {
                    refreshToken().then(()=> dispatch(getUserInfo()).then(setIsLoading(false))).catch(e => console.log(e));
                } else {
                    dispatch(getUserInfo()).then(setIsLoading(false))
                }
            }
        }
    }, [])

    useEffect(()=>{
        if(user!==undefined) {
            setEmail(user.email)
            setName(user.name)
        }
    }, [user])


    const save = useCallback(() => {
        let form = {
            email: email,
            name: name
        }
        dispatch(changeUserInfo(form))
    },[])

    const cancel = useCallback( () => {
        setEmail(user.email);
        setName(user.name);
        dispatch(getUserInfo()).then(setIsLoading(false))
        setIsDefault(true)
    },[])

    const onClick = (e) => {
        e.target.outerText === 'Выход' && dispatch(logOut())
    }

    return isLoading ? (
        <>
            Подождите, информация о пользователе не такая реактивная!
        </>
    ) : (
        <div className={styles.main_block}>
            <div className={styles.menu}>
                {MENU_LINKS.map((elem,index) => (
                    <div className={styles.menuItem} key={index}>
                        <NavLink to={elem.link} className={styles.menuItemLink} onClick={e => onClick(e) } activeClassName={styles.menuItemLinkActive} exact={true}>
                            <p className="text text_type_main-medium">
                                {elem.name}
                            </p>
                        </NavLink>
                    </div>
                ))}
                <div className={styles.info}>
                    <p className="text text_type_main-small">
                        В этом разделе вы можете изменить свои персональные данные
                    </p>
                </div>
            </div>
            <div className={styles.data}>
                <div className={styles.dataItem}>
                    <Input
                        type={'text'}
                        placeholder={'Имя'}
                        onChange={e => {
                            setName(e.target.value);
                            setIsDefault(false)
                        }}
                        icon={'EditIcon'}
                        value={name || ''}
                        name={'name'}
                        error={false}
                        ref={nameRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={styles.dataItem}>
                    <Input
                        type={'email'}
                        placeholder={'E-mail'}
                        onChange={e => {
                            setEmail(e.target.value);
                            setIsDefault(false)
                        }}
                        icon={'EditIcon'}
                        value={email || ''}
                        name={'name'}
                        error={false}
                        ref={emailRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={styles.dataItem}>
                    <Input
                        type={'password'}
                        placeholder={'Пароль'}
                        onChange={e => {
                            setPassword(e.target.value);
                            setIsDefault(false)
                        }}
                        icon={'EditIcon'}
                        value={password || ''}
                        name={'name'}
                        error={false}
                        ref={pwdRef}
                        errorText={'Ошибка'}
                        size={'default'}
                    />
                </div>
                <div className={styles.button}>
                    <Button type="primary" size="large" onClick={save}>
                        Сохранить
                    </Button>
                </div>
                {!isDefault && (
                    <div className={styles.button}>
                        <Button type="primary" size="large" onClick={cancel}>
                            Отменить
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}