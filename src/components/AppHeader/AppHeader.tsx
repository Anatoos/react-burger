import React, { FC } from "react";
import styles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import { useLocation, Link } from "react-router-dom";

type TEntry = {
    path: string;
};

const AppHeader = () =>{
    const { pathname } = useLocation();
    const isMain = pathname === '/';
    const isOrders = pathname === '/feed';
    return (
        <section className={styles.header}>
            <section className={styles.wrapper}>
                <section className={styles.menu}>
                    <Link to={'/'}>
                        <section className={styles.menuItem}>
                            <BurgerIcon type={ isMain ? "primary" : "secondary" }/>
                            <p className={ !isMain ? "text text_type_main-default":"text text_type_main-default " + styles.active}>
                                Конструктор
                            </p>
                        </section>
                    </Link>
                    <Link to={'/feed'}>
                        <section className={styles.menuItem}>
                            <ListIcon type={ isOrders ? "primary" : "secondary" }/>
                            <p className={ !isOrders ? "text text_type_main-default":"text text_type_main-default " + styles.active}>
                                Лента заказов
                            </p>
                        </section>
                    </Link>
                </section>
                <Link to={'/'}>
                    <Logo/>
                </Link>
                <Entry path={pathname} />
            </section>
        </section>
    );
}

const Entry: FC<TEntry> = (path) => {
    return (
        <Link className={path.path === '/profile' ? styles.entry + ' ' + styles.active : styles.entry} to='/profile'>
            <ProfileIcon type={path.path ==='/profile' ? "primary" : "secondary"}/>
            <p className="text text_type_main-default">
                Личный кабинет
            </p>
        </Link>
    );
};

export default AppHeader;