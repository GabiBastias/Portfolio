import { useState } from "react";
import { createRandomFakeBand, deleteFakeBandById, getAllFakeBands, getBandById } from "../../services/redux/actions";
import styles from "./apiShower.module.css";
import { useDispatch, useSelector } from 'react-redux';
import APIForm from "./APIForm";

const APIShower = () => {
    const [id, setId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const [formManipulation, setFormManipulation] = useState({
        manipulate: false,
        formName: "",
        bandId: ""
    });
    const allBands = useSelector(state => state.allBands);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.name === "id") setId(event.target.value);
        else if(event.target.name === "deleteId") setDeleteId(event.target.value);
    }

    const handleBands = () => {
        dispatch(getAllFakeBands());
    }

    const handleForm = (event) => {
        if (event.target.value === "") {
            setFormManipulation({...formManipulation, manipulate: true, formName: event.target.value});
        } else {
            setFormManipulation({...formManipulation, manipulate: true, formName: event.target.value, bandId: id});
        }
    }

    const handleClose = () => {
        setFormManipulation(false)
    }

    return(
        <article className={styles.articleAPIShower}>
            <div className={styles.divLeft}>
                <h2 className={styles.h2APIShower}>Fake Band API-REST:</h2>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Get all Fake Bands </summary>
                    <br />
                    <button onClick={handleBands}>Get all Fake Bands</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Get Band by ID </summary>
                    <br />
                    <input onChange={handleChange} name="id" value={id} type="text" placeholder="Insert the ID..."/>
                    <button onClick={() => {dispatch(getBandById(id)); setId("")}}>X</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Create Random Fake Band </summary>
                    <br />
                    <button onClick={() => dispatch(createRandomFakeBand())}>Create Random Fake Band</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Create Fake Band </summary>
                    <br />
                    <button onClick={handleForm} value="Create Fake Band">Create Fake Band</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Update complete Fake Band (PUT) </summary>
                    <br />
                    <input onChange={handleChange} name="id" value={id} type="text" placeholder="Insert the ID..."/>
                    <button onClick={() => {dispatch(getBandById(id)); setId("")}}>X</button>
                    <br />
                    <br />
                    <button onClick={handleForm} value="Update Fake Band">Update Fake Band</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Update some Fake Band field (PATCH) </summary>
                    <br />
                    <button onClick={handleForm} value="Patch Fake Band">Patch Fake Band</button>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Delete Band by ID </summary>
                    <br />
                    <input type="text" onChange={handleChange} name="deleteId" value={deleteId}placeholder="Insert the ID..."/>
                    <button onClick={() => {dispatch(deleteFakeBandById(deleteId)); setDeleteId("")}}>X</button>
                </details>
            </div>
            <APIForm manipulate={formManipulation} handleClose={handleClose}/>
            <section className={styles.sectionAPIShower}>
                <div className={styles.divView}>
                    <pre className={styles.data}>{JSON.stringify(allBands, null, 2)}</pre>
                </div>
            </section>
        </article>
    )
}

export default APIShower;