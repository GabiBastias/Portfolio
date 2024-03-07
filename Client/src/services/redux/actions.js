import { LANGUAJE } from "./actionTypes";

export const languageSelector = (type) => {
    return{
        type: LANGUAJE,
        payload: type
    }
}