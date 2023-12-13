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

    const handleCreate = (type) => {
        const divAPIFormCreate = document.getElementById("create");
        const divAPIFormUpdate = document.getElementById("update");
        const divAPIFormPatch = document.getElementById("patch");
        switch (type) {
            case "create":{
                
                if (divAPIFormCreate.classList.value === "show") {
                    divAPIFormCreate.classList.remove('show');
                    divAPIFormCreate.classList.add('showOrNot');
                } else if (divAPIFormCreate.classList.value === "showOrNot") {
                    divAPIFormCreate.classList.remove('showOrNot');
                    divAPIFormCreate.classList.add('show');
                }
                divAPIFormUpdate.classList.remove('show');
                divAPIFormUpdate.classList.add('showOrNot');
                divAPIFormPatch.classList.remove('show');
                divAPIFormPatch.classList.add('showOrNot');
                break;
            }
            case "update":{
                
                if (divAPIFormUpdate.classList.value === "show") {
                    divAPIFormUpdate.classList.remove('show');
                    divAPIFormUpdate.classList.add('showOrNot');
                } else if (divAPIFormUpdate.classList.value === "showOrNot") {
                    divAPIFormUpdate.classList.remove('showOrNot');
                    divAPIFormUpdate.classList.add('show');
                }
                divAPIFormCreate.classList.remove('show');
                divAPIFormCreate.classList.add('showOrNot');
                divAPIFormPatch.classList.remove('show');
                divAPIFormPatch.classList.add('showOrNot');
                break;
            }
            case "patch":{
                
                if (divAPIFormPatch.classList.value === "show") {
                    divAPIFormPatch.classList.remove('show');
                    divAPIFormPatch.classList.add('showOrNot');
                } else if (divAPIFormPatch.classList.value === "showOrNot") {
                    divAPIFormPatch.classList.remove('showOrNot');
                    divAPIFormPatch.classList.add('show');
                }
                divAPIFormCreate.classList.remove('show');
                divAPIFormCreate.classList.add('showOrNot');
                divAPIFormUpdate.classList.remove('show');
                divAPIFormUpdate.classList.add('showOrNot');
                break;
            }
        
            default:
                divAPIFormCreate.classList.remove('show');
                divAPIFormCreate.classList.add('showOrNot');
                divAPIFormUpdate.classList.remove('show');
                divAPIFormUpdate.classList.add('showOrNot');
                divAPIFormPatch.classList.remove('show');
                divAPIFormPatch.classList.add('showOrNot');
                break;
        }    
    }

    return(
        <article className={styles.articleAPIShower}>
            <div className={styles.divLeft}>
                <h2 className={styles.h2APIShower}>Fake Band API-REST:</h2>
                <div className={styles.divOptions}>
                    <div className={styles.divPetitions}>
                        <label>Get all Fake Bands </label>
                        <button onClick={handleBands}>X</button>
                    </div>
                    <div className={styles.divPetitions}>
                        <label>Get Band by ID: </label>
                        <input onChange={handleChange} name="id" value={id} type="text" placeholder="Insert the ID..."/>
                        <button onClick={() => {dispatch(getBandById(id)); setId("")}}>X</button>
                    </div>
                    <div className={styles.divPetitions}>
                        <label>Create Random Fake Band </label>
                        <button onClick={() => dispatch(createRandomFakeBand())}>X</button>
                    </div>
                    <div className={styles.divPetitions}>
                        <label>Create Fake Band </label>
                        <button onClick={() => handleCreate("create")}>X</button>
                    </div>
                    <div className="showOrNot" id="create">
                        <APIForm name={"Create Fake Band"}/>
                    </div>
                    <div className={styles.divPetitions}>
                        <label>Update complete Fake Band (PUT) </label>
                        <button onClick={() => handleCreate("update")}>X</button>
                    </div>
                    <div className="showOrNot" id="update">
                        <APIForm name={"Update Fake Band"}/>
                    </div>
                    <div className={styles.divPetitions}>
                        <label>Update some Fake Band field (PATCH) </label>
                        <button onClick={() => handleCreate("patch")}>X</button>
                    </div>
                    <div className="showOrNot" id="patch">
                        <APIForm name={"Patch Fake Band"}/>
                    </div>
                    <div className={styles.divPetitions}>
                        <label>Delete Band by ID: </label>
                        <input type="text" onChange={handleChange} name="deleteId" value={deleteId}placeholder="Insert the ID..."/>
                        <button onClick={() => {dispatch(deleteFakeBandById(deleteId)); setDeleteId("")}}>X</button>
                    </div>
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