import { API } from "../data/data";
import { checkResponse } from "./checkResponse";

export const  acceptResetPassword= async (pwd, token) => {
    return await fetch( API + 'password-reset/reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            password: pwd,
            token: token
        })
    }).then(checkResponse)
        .then(res => res.message === "Password reset success")
        .catch((err) => {
            alert(err ? err : "Password accept request error!");
            return false;
        })
}