import React from "react";
import styles from './AppHeader.module.css';
import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import PropTypes from "prop-types";


const AppHeader = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Logo />
            </div>
            <div className={styles.header_menu}>
                <Menu />
                <Profile classnames={styles.navItem + ' text text_type_main-default text_color_inactive'} text='Личный кабинет'>
                    <ProfileIcon type="secondary"/>
                </Profile>
            </div>

        </header>
    );
}

const Menu = () => {
    return(
        <div className={styles.navbar}>
            <MenuItem classnames={styles.navItem + ' text text_type_main-default'} text='Конструктор'>
                <BurgerIcon type="primary"/>
            </MenuItem>
            <MenuItem classnames={styles.navItem + ' text text_type_main-default text_color_inactive'} text='Лента заказов'>
                <ListIcon type="secondary"/>
            </MenuItem>
        </div>
    );
}
const MenuItem = (props) =>{
    return(
        <div className={props.classnames}>
            {props.children}
            <p> {props.text} </p>
        </div>
    );
}

const Profile = (props) => {
    return(
        <div className={props.classnames}>
            {props.children}
            <p> {props.text} </p>
        </div>
    );
}



MenuItem.propTypes ={
    classnames: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}
Profile.propTypes ={
    classnames: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default AppHeader;