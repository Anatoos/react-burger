import React from "react";
import appHeaderStyles from './AppHeader.module.css';
import {Logo, BurgerIcon, ListIcon, ProfileIcon} from '@ya.praktikum/react-developer-burger-ui-components'


const AppHeader = () => {
    return(
        <header className={appHeaderStyles.header}>
            <div className={appHeaderStyles.logo}>
                <Logo />
            </div>
            <div className={appHeaderStyles.header_menu}>
                <Menu />
                <Profile classnames={appHeaderStyles.navItem + ' text text_type_main-default text_color_inactive'} text='Личный кабинет'>
                    <ProfileIcon type="secondary"/>
                </Profile>
            </div>

        </header>
    );
}

const Menu = () => {
    return(
        <div className={appHeaderStyles.navbar}>
            <MenuItem classnames={appHeaderStyles.navItem + ' text text_type_main-default'} text='Конструктор'>
                <BurgerIcon type="primary"/>
            </MenuItem>
            <MenuItem classnames={appHeaderStyles.navItem + ' text text_type_main-default text_color_inactive'} text='Лента заказов'>
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