import { useEffect } from "react";
import { getAllFakeBands } from "../../services/redux/actions";
import styles from "./apiShower.module.css";
import { useDispatch, useSelector } from 'react-redux';

const APIShower = () => {
    const allBands = useSelector(state => state.allBands)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllFakeBands())

    },[dispatch]);

    return(
        <article className={styles.articleAPIShower}>
            <div className={styles.divLeft}>
                <h2 className={styles.h2APIShower}>Fake Band API-REST:</h2>
                <div>
                    <label>Get all Fake Bands </label>
                    <button>X</button>
                    <br />
                    <label>Get Band by Id </label>
                    <input type="text" placeholder="Insert the ID..."/>
                    <button>X</button>
                    <br />
                    <label>Create Random Fake Band </label>
                    <button>X</button>
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
                    <input type="text" placeholder="Insert the ID..."/>
                    <button>X</button>
                </div>
            </div>
            <section className={styles.sectionAPIShower}>
                <div className={styles.divView}>[
                    {
                        allBands?.map((dat, index) => {
                            return <pre key={index} className={styles.data}>{JSON.stringify(dat, null, 2)},</pre>
                        })
                    }
                ]</div>
            </section>
        </article>
    )
}

export default APIShower;