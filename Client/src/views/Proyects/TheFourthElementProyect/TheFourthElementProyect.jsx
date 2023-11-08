import styles from './theFourthElementProyect.module.css'
import TheFourthElementIMG from '../../../assets/img/TheFourthElement.png'

const TheFourthElementProyect = () => {
    return(
        <article className={styles.articleTheFourthElement}>
                <img className={styles.backgroundIMG} src={TheFourthElementIMG} alt="backgroundIMG" />
                <div className={styles.divLeft}>
                </div>
                <section className={styles.sectionTheFourthElement}>
                    <h1 className={styles.h1TheFourthElement}>The Fourth Element</h1>
                </section>
            </article>
    );
}

export default TheFourthElementProyect;