import React, { useEffect, FC } from 'react';
import { useDispatch } from '../../types/hooks';
import { useLocation } from "react-router-dom";
import { WS_CONNECTION_START, WS_CONNECTION_CLOSED} from "../../services/actions/wsConnect";
import { WS_CONNECTION_START_USER, WS_CONNECTION_CLOSED_USER} from "../../services/actions/wsConnectUser";
import FeedDetails from "./FeedDetails";


export const FeedId: FC = () => {
    const path = useLocation().pathname;
    const dispatch = useDispatch();
    useEffect(() => {
        path.indexOf('feed') !== -1
            ? dispatch({ type: WS_CONNECTION_START })
            : dispatch({ type: WS_CONNECTION_START_USER })
        return () => {
            path.indexOf('feed') !== -1
                ? dispatch({ type: WS_CONNECTION_CLOSED })
                : dispatch({ type: WS_CONNECTION_CLOSED_USER })
        };
    }, [dispatch]);

    return (
        <main>
            <FeedDetails/>
        </main>
    )
};