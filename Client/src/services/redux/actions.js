import { ALL_BANDS, ALL_GENRES, BANDS_BY_ID, CREATE_RANDOM_BAND, CREATE_RANDOM_BAND_BY_BODY, DELETE_BAND } from "./actionTypes";
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

export const getAllFakeGenres = () => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${backURL}/fakeGenres`)
            .then(res => res.json());
            if (response.error) throw Error(response.error);
            return dispatch({
                type: ALL_GENRES,
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
            const response = await fetch(`${backURL}/fakeBands/${id}`)
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
            const response = await fetch(`${backURL}/fakeBands/random`, { method: "POST"})
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

export const createRandomFakeBandByBody = (fakeBand) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${backURL}/fakeBands`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fakeBand)
            });
            if (response.error) throw Error(response.error);
            alert(response.message);
            return dispatch({
                type: CREATE_RANDOM_BAND_BY_BODY,
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
            const response = await fetch(`${backURL}/fakeBands?id=${id}`, { 
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