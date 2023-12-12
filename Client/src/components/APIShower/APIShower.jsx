import { useEffect, useState } from "react";
import { createRandomFakeBand, deleteFakeBandById, getAllFakeBands, getBandById } from "../../services/redux/actions";
import styles from "./apiShower.module.css";
import { useDispatch, useSelector } from 'react-redux';

const APIShower = () => {
    const [id, setId] = useState("");
    const [deleteId, setDeleteId] = useState("");
    const allBands = useSelector(state => state.allBands);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(allBands);
        console.log(id);

    },[id, allBands]);

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
                <div>
                    <label>Get all Fake Bands </label>
                    <button onClick={handleBands}>X</button>
                    <br />
                    <label>Get Band by ID: </label>
                    <input onChange={handleChange} name="id" value={id} type="text" placeholder="Insert the ID..."/>
                    <button onClick={() => {dispatch(getBandById(id)); setId("")}}>X</button>
                    <br />
                    <label>Create Random Fake Band </label>
                    <button onClick={() => dispatch(createRandomFakeBand())}>X</button>
                    <br />
                    <label>Create Fake Band </label>
                    <button>X</button>
                    <br />
                    <label>Update complete Fake Band (PUT) </label>
                    <button>X</button>
                    <br />
                    <label>Update some Fake Band field (PATCH) </label>
                    <button>X</button>
                    <br />
                    <label>Delete Band by ID: </label>
                    <input type="text" onChange={handleChange} name="deleteId" value={deleteId}placeholder="Insert the ID..."/>
                    <button onClick={() => {dispatch(deleteFakeBandById(deleteId)); setDeleteId("")}}>X</button>
                </div>
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