import { useEffect, useState } from "react";
import styles from "./apiShower.module.css";

const APIShower = () => {
    const [ data, setData ] = useState();

    useEffect(() => {
        const fetchData = async() => {
            try {
                const response = await fetch('http://localhost:6433/fakeBands');
                const jsonData = await response.json();
                setData(jsonData)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchData();

    },[]);

    return(
        <>
            <div className={styles.divView}>[
                {
                    data?.map((dat, index) => {
                        return <pre key={index} className={styles.data}>{JSON.stringify(dat, null, 2)},</pre>
                    })
                }
            ]</div>
        </>
    )
}

export default APIShower;