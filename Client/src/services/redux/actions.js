import { ALL_BANDS, ALL_GENRES, BANDS_BY_ID, CREATE_RANDOM_BAND, CREATE_RANDOM_BAND_BY_BODY, DELETE_BAND, PATCH_BAND, UPDATE_BAND } from "./actionTypes";
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
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fakeBand)
            })
            .then(res => res.json());
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

export const updateFakeBand = (id, fakeBand) => {
    return async (dispatch) => {
        try {
            const response = await fetch(`${backURL}/fakeBands?id=${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fakeBand)
            })
            .then(res => res.json());
            if (response.error) throw Error(response.error);
            alert(response.message);
            return dispatch({
                type: UPDATE_BAND,
                payload: response.band
            })
        } catch (error) {
            alert(`An error has ocurred, please try again! \n ${error}`)
        }
    }
}

export const patchFakeBand = (id, fakeBand) => {
    return async (dispatch) => {
        const changedBand = {
            band: fakeBand.bandName,
            discs: fakeBand.bandDiscs,
            genres: fakeBand.bandGenres,
            startDate: fakeBand.startDate,
            numbOfMembers: fakeBand.numbOfMembers
        }
        try {
            const response = await fetch(`${backURL}/fakeBands?id=${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(changedBand)
            })
            .then(res => res.json());
            if (response.error) throw Error(response.error)
            alert(response.message)
            return dispatch({
                type: PATCH_BAND,
                payload: response.band
            });
        } catch (error) {
            alert(`An error has ocurred, please try again! \n ${error}`)
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