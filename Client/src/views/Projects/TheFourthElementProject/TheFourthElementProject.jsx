import styles from './theFourthElementProject.module.css'
import TheFourthElementIMG from '../../../assets/img/TheFourthElementBlack.png'
import TheFourthElementProjectIMG from '../../../assets/img/TheFourthElementProject.png'
import { useSelector } from 'react-redux'

const TheFourthElementProject = () => {

    const language = useSelector(state => state.language);

    return(
        <article className={styles.articleTheFourthElement}>
            <img className={styles.backgroundIMG} src={TheFourthElementIMG} alt="backgroundIMG" />
            <div className={styles.divLeft}>
            </div>
            <section className={styles.sectionTheFourthElement}>
                <h2 className={styles.h1TheFourthElement}>The Fourth Element</h2>
                <div className={styles.divImgP}>
                    <a href="https://the-fourth-element-client.vercel.app/" target="_blank" rel="noreferrer noopener" className={styles.link}>
                        <img className={styles.theFourthElementProjectIMG} src={TheFourthElementProjectIMG} alt="TheFourthElementproject" />
                        {
                            language === "Spanish" &&
                            <p className={styles.pInfoTheFourthElement}>Aplicación web que contiene cursos destinado a deportistas de alto rendimiento; este projecto fue reportado directamente a un experto en el mundo del Coaching y Biología molecular.</p>
                        }
                        {
                            language === "English" &&
                            <p className={styles.pInfoTheFourthElement}>Web application to access courses for high-performance athletes, for a well-known client in the world of coaching and molecular biology.</p>
                        }
                    </a>
                </div>
            </section>
        </article>
    );
}

export default TheFourthElementProject;