import { useState } from "react";
import styles from "./apiShower.module.css";
import inputCreateValidator from "../../services/validator/inputAPICreateValidator";

const APIForm = ({name}) => {

    const [ band, setBand ] = useState({
        bandName: "",
        bandDiscs: [],
        bandGenres: [],
        startDate: "",
        numbOfMembers: ""
    });

    const [ errors, setErrors ] = useState();

    const handleChange = (event) => {
        const updateBand = {...band, [event.target.name]: event.target.value}
        setBand(updateBand);

        const validateErrors = inputCreateValidator(updateBand);
        setErrors(validateErrors);

        document.getElementById("sentBtn").disabled = Object.keys(validateErrors).length > 0;
    }

    const handleSubmit = (type) => {
        
        console.log(type);
        console.log(band);
        alert("good")

    }

    return(
        <form className={styles.formCreateBand} onSubmit={() => handleSubmit(name)}>
                        
            <fieldset className={styles.fieldsetCreateBand}>
                <legend>{name}</legend>
                <label>Band Name</label>
                <input 
                    type="text" 
                    name="bandName"
                    onChange={handleChange}
                />
                {
                    errors?.bandName ? <span>{errors.bandName}</span> : null
                }
                <label>Discs</label>
                <input 
                    type="text"
                    name="bandDiscs"
                    onChange={handleChange}
                />
                {
                    errors?.bandDiscs ? <span>{errors.bandDiscs}</span> : null
                }
                <label>Genres</label>
                <input 
                    type="text"
                    name="bandGenres"
                    onChange={handleChange}
                />
                {
                    errors?.bandGenres ? <span>{errors.bandGenres}</span> : null
                }
                <label>Band Start Date</label>
                <input 
                    type="date" 
                    name="startDate"
                    onChange={handleChange}
                />
                {
                    errors?.startDate ? <span>{errors.startDate}</span> : null
                }
                <label>Number of Members</label>
                <input 
                    type="text" 
                    name="numbOfMembers"
                    onChange={handleChange}
                />
                {
                    errors?.numbOfMembers ? <span>{errors.numbOfMembers}</span> : null
                }
                <br />
                <button type="submit" id="sentBtn">Send</button>
            </fieldset>
        </form>
    )
}

export default APIForm;