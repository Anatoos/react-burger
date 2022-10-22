import React from "react";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from './register.module.css';


export const Register = () => {
    const [value, setValue] = React.useState('value')
    const inputRef = React.useRef(null)
    const onIconClick = () => {
        setTimeout(() => inputRef.current.focus(), 0)

    }
    return(
        <div className={styles.main_block}>
            <Input
                type={'text'}
                placeholder={'placeholder'}
                onChange={e => setValue(e.target.value)}
                icon={'CurrencyIcon'}
                value={value}
                name={'name'}
                error={false}
                ref={inputRef}
                onIconClick={onIconClick}
                errorText={'Ошибка'}
                size={'default'}
            />
        </div>
    )
}