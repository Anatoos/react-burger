import {useLocation, Navigate} from 'react-router-dom';
import {getCookie} from "../functions/cookie";
import {refreshToken} from "../services/actions/auth";

export const ProtectedRoute: ({children}: { children: any }) => (JSX.Element) = ({ children }) => {
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

export const ProtectedForAnyRoute: ({children}: { children: any }) => (JSX.Element) = ({ children }) => {
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
export const ProtectedForAuthRoute: ({children}: { children: any }) => (JSX.Element) = ({ children }) => {
    if (getCookie('token') !== undefined) {
        return (
            <Navigate to={{pathname:'/'}}/>
        )
    }

    return children;
}



