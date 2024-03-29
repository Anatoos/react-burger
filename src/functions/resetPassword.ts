import { API } from "../data/data";
import { checkResponse } from "./checkResponse";

export const  resetPassword = async (email: {email:string}) => {
    return await fetch( API  + 'password-reset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(email)
    }).then(checkResponse)
        .then(res => res.message === "Reset email sent")
        .catch((err) => {
            alert(err ? err : "Unknown error");
            return false;
        })
}