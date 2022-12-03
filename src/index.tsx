import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { compose, legacy_createStore as createStore , applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { BrowserRouter as Router } from "react-router-dom";
import { rootReducer } from "./services/reducers";
import { Provider } from 'react-redux';
import { wsActions } from "./services/actions/wsConnect";
import { wsActionsUser } from "./services/actions/wsConnectUser";
import { socketMiddleware } from "./services/middleware/wsConnect";
import { WS_URL_ALL, WS_URL_OWNER } from "./data/data";

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(
    thunk,
    socketMiddleware( WS_URL_ALL, wsActions, false),
    socketMiddleware( WS_URL_OWNER, wsActionsUser, true)
));

export const store = createStore(rootReducer, enhancer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ store }>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();