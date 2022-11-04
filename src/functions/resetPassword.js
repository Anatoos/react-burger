import { API } from "../data/data";
import { checkResponse } from "./checkResponse";

export const  resetPassword = async (emailToReset) => {
    return await fetch( API  + 'password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(emailToReset)
    }).then(checkResponse)
        .then(res => res.message === "Reset email sent")
        .catch((err) => {
            alert(err ? err : "Unknown error");
            return false;
        })
}