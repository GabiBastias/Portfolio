import { ALL_BANDS, BANDS_BY_ID, CREATE_RANDOM_BAND, DELETE_BAND } from "./actionTypes";
const backURL = import.meta.env.VITE_BACK_URL;

export const getAllFakeBands = () => {
    return async (dispatch) => {
        try {
           const response = await fetch(`${backURL}/fakeBands`)
            .then(res => res.json());
            if (response.error) throw Error(response.error)
           return dispatch({
                type: ALL_BANDS,
                payload: response
           })
        } catch (error) {
            alert(`An error has ocurred, please try again! \n ${error}`);
        }
    }
}

export const getBandById = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${backURL}/fakebands?id=${id}`)
            .then(res => res.json());
            if (response.error) throw Error(response.error)
            return dispatch({
                type: BANDS_BY_ID,
                payload: response
            })   
        } catch (error) {
            alert(`An error has ocurred, please try again! \n ${error}`);
        }
    }
}

export const createRandomFakeBand = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${backURL}/fakebands/random`, { method: "POST"})
            .then(res => res.json());
            if (response.error) throw Error(response.error)
            alert(response.message)
            return dispatch({
                type: CREATE_RANDOM_BAND,
                payload: response.band
            })
        } catch (error) {
            alert(`An error has ocurred, please try again! \n ${error}`);
        }
    }
}

export const deleteFakeBandById = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${backURL}/fakebands?id=${id}`, { 
                method: "DELETE", 
                headers: {
                    "Content-Type": "application/json",
                } 
            })
            .then(res => res.json());
            if (response.error) throw Error(response.error)
            alert(JSON.stringify(response.message));
            return dispatch({
                type: DELETE_BAND,
                payload: response.bands
            });
        } catch (error) {
            alert(`An error has ocurred, please try again! \n ${error}`);
        }
    }
};