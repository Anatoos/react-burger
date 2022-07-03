import React from "react";
import appHeaderStyles from './app-header.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'


const AppHeader = () => {
    return(
        <header className={appHeaderStyles.header}>
            <Menu />
            <Logo />
            <Profile classnames={appHeaderStyles.headerItem + ' text text_type_main-default text_color_inactive'} text='Личный кабинет'>
                <ProfileIcon type="secondary"/>
            </Profile>
        </header>
    );
}

const Menu = () => {
    return(
        <div className={appHeaderStyles.navbar}>
            <MenuItem classnames={appHeaderStyles.headerItem + ' text text_type_main-default'} text='Конструктор'>
                <BurgerIcon type="primary"/>
            </MenuItem>
            <MenuItem classnames={appHeaderStyles.headerItem + ' text text_type_main-default text_color_inactive'} text='Лента заказов'>
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






export default AppHeader;