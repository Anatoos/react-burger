import { refreshToken } from "../services/actions/auth";

export const  checkResponse = (res) => {
    if (!res.ok) {
        if(res.status === 403) {
            refreshToken().catch(()=> alert("Token is not refreshed"));
        } else {
            throw "Произошла ошибка при загрузке данных"
        }
    }
    return res.json();
}