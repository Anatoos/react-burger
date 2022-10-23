import {Redirect, Route, useHistory} from 'react-router-dom';
import {getCookie} from "../functions/cookie";
import {refreshToken} from "../services/actions/auth";

export function ProtectedRoute({ children, ...rest }) {
    const history = useHistory();
    if (getCookie('token') === undefined) {
        if(localStorage.getItem('refreshToken') === null ) {
            return (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: history.location.pathname }
                    }}
                />
            );
        } else {
            refreshToken().catch(() =>{
                return (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: history.location.pathname }
                        }}
                    />
                );
            });
        }

    }

    return (
        <Route
            {...rest}
            render={() => (
                children
            )
            }
        />
    );
}