import { useLocation, Navigate } from 'react-router-dom';
import { getCookie } from "../functions/cookie";
import { refreshToken } from "../services/actions/auth";
import React, {ReactElement} from "react";

type TProtect = {  children: ReactElement | JSX.Element;}

export const ProtectedRoute = ({children}: TProtect) => {
    const location = useLocation();
    if (getCookie('token') === undefined) {
        if(localStorage.getItem('refreshToken') === null ) {
            return (
                <Navigate
                    to={{
                        pathname: '/login'
                    }}
                    state={{
                        from: location.pathname
                    }}
                />
            );
        } else {
            refreshToken().catch(() =>{
                return (
                    <Navigate
                        to={{
                            pathname: '/login'
                        }}
                        state={{
                            from: location.pathname
                        }}
                    />
                );
            });
        }

    }

    return children;
}

export const ProtectedForAnyRoute = ({children}: TProtect)  => {
    const location = useLocation();
    const refer = location.state && location.state.from;

    if (getCookie('token') !== undefined) {
        return (
            <Navigate to={{pathname:'/'}}/>
        )
    } else {
        if (refer !== '/forgot-password') {
            return (
                <Navigate to={{pathname:'/'}}/>
            )
        }
    }

    return children;
}
export const ProtectedForAuthRoute = ({children}: TProtect)  => {
    if (getCookie('token') !== undefined) {
        return (
            <Navigate to={{pathname:'/'}}/>
        )
    }

    return children;
}



