import { useEffect, useState } from "react";
import styles from "./apiShower.module.css";
import inputCreateValidator from "../../services/validator/inputAPICreateValidator";
import { useDispatch, useSelector } from "react-redux";
import { createRandomFakeBandByBody, getAllFakeGenres } from "../../services/redux/actions";

const APIForm = () => {

    const dispatch = useDispatch();
    const allGenres = useSelector(state => state.allGenres);

    const [ band, setBand ] = useState({
        bandName: "",
        bandDiscs: [],
        bandGenres: [],
        startDate: "",
        numbOfMembers: ""
    });

    const [ errors, setErrors ] = useState();

    const handleDiscs = (event) => {
        event.preventDefault();
        const findId = document.getElementById("bandDiscs");
        console.log(findId.value);
        setBand({...band, bandDiscs: [...band.bandDiscs, findId.value]})
    }

    useEffect(() => {
        console.log(band.bandDiscs);
    },[band])

    const handleGenres = (event) => {
        const genresId = document.getElementById(event.target.id);
        if (band.bandGenres.includes(event.target.value)) {
            const genFinder = band.bandGenres.filter(gen => gen !== event.target.value);
            setBand({...band, bandGenres: genFinder});
            genresId.classList.remove('buttomPressed');
        } else {
            setBand({...band, bandGenres: [...band.bandGenres, event.target.value]});
            genresId.classList.add('buttomPressed');
        }
    }

    const handleChange = (event) => {
        if (event.target.name != "bandDiscs") {
            const updateBand = {...band, [event.target.name]: event.target.value}
            setBand(updateBand);
    
            const validateErrors = inputCreateValidator(updateBand);
            setErrors(validateErrors);
    
            document.getElementById("sentBtn").disabled = Object.keys(validateErrors).length > 0;
        }
    }

    const handleSubmit = (type, event) => {
        dispatch(getAllFakeGenres())
        event.preventDefault();
        console.log(type);
        console.log(band);
        alert("good")
        if (type === 'Create Fake Band') {
            dispatch(createRandomFakeBandByBody(band))
        }
        setBand({
            bandName: "",
            bandDiscs: [],
            bandGenres: [],
            startDate: "",
            numbOfMembers: ""
        });

    }

    // console.log(band.bandGenres);

    return(
        <form className={styles.formCreateBand} onSubmit={() => handleSubmit(name)}>
                        
            <fieldset className={styles.fieldsetCreateBand}>
                <div className={styles.divName}>
                    <label>Band Name</label>
                    <input 
                        type="text" 
                        name="bandName"
                        value={band.bandName}
                        onChange={handleChange}
                    />
                    {
                        errors?.bandName ? <span className={styles.spanErrors}>{errors.bandName}</span> : null
                    }
                </div>
                <div className={styles.divDiscs}>
                    <label className={styles.labelDiscs}>Discs</label>
                    <input 
                        type="text"
                        name="bandDiscs"
                        id="bandDiscs"
                        placeholder="Insert ONE Disc at time"
                        onChange={handleChange}
                        className={styles.inputDiscs}
                    />
                    <button 
                        type="submit" 
                        className={styles.buttonDiscs}
                        onClick={handleDiscs}
                    >X</button>
                    {
                        band?.bandDiscs && band.bandDiscs.map((fakeBand, index) => {
                            return <p key={index}>{fakeBand}</p>
                        })
                    }
                    <br />
                    {
                        errors?.bandDiscs ? <span className={styles.spanErrors}>{errors.bandDiscs}</span> : null
                    }
                </div>
                <div className={styles.divGenres}>
                    <label>Genres</label>
                    <div className={styles.divGenre}>
                        {
                            allGenres.map(genre => {
                                return <button 
                                            type="button"
                                            key={genre._id}
                                            id={genre._id}
                                            value={genre.name}
                                            onClick={handleGenres}
                                            className={styles.genreBtn} 
                                        >{genre.name}</button>
                            })
                        }
                    </div>
                    {
                        errors?.bandGenres ? <span className={styles.spanErrors}>{errors.bandGenres}</span> : null
                    }
                </div>
                <div className={styles.divDate}>
                    <label>Band Start Date</label>
                    <input 
                        type="date" 
                        name="startDate"
                        value={band.startDate}
                        onChange={handleChange}
                    />
                    {
                        errors?.startDate ? <span className={styles.spanErrors}>{errors.startDate}</span> : null
                    }
                </div>
                <div className={styles.divMembers}>
                    <label>Number of Members</label>
                    <input 
                        type="text" 
                        name="numbOfMembers"
                        value={band.numbOfMembers}
                        onChange={handleChange}
                    />
                    {
                        errors?.numbOfMembers ? <span className={styles.spanErrors}>{errors.numbOfMembers}</span> : null
                    }
                </div>
                <br />
            </fieldset>
            <button type="submit" id="sentBtn">Send</button>
        </form>
    )
}

export default APIForm;