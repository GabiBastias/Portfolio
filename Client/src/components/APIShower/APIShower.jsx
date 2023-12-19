import { useState } from "react";
import { createRandomFakeBand, deleteFakeBandById, getAllFakeBands, getBandById } from "../../services/redux/actions";
import styles from "./apiShower.module.css";
import { useDispatch, useSelector } from 'react-redux';
import APIForm from "./APIForm";

const APIShower = () => {
    const [id, setId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const allBands = useSelector(state => state.allBands);
    const dispatch = useDispatch();

    const handleChange = (event) => {
        if (event.target.name === "id") setId(event.target.value);
        else if(event.target.name === "deleteId") setDeleteId(event.target.value);
    }

    const handleBands = () => {
        dispatch(getAllFakeBands());
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
                    <APIForm/>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Update complete Fake Band (PUT) </summary>
                    <APIForm/>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Update some Fake Band field (PATCH) </summary>
                    <APIForm/>
                </details>
                <details className={styles.detailsAPISh} name="fakeBand">
                    <summary>Delete Band by ID </summary>
                    <br />
                    <input type="text" onChange={handleChange} name="deleteId" value={deleteId}placeholder="Insert the ID..."/>
                    <button onClick={() => {dispatch(deleteFakeBandById(deleteId)); setDeleteId("")}}>X</button>
                </details>
            </div>
            <section className={styles.sectionAPIShower}>
                <div className={styles.divView}>
                    <pre className={styles.data}>{JSON.stringify(allBands, null, 2)}</pre>
                </div>
            </section>
        </article>
    )
}

export default APIShower;