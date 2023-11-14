import styles from './theFourthElementProyect.module.css'
import TheFourthElementIMG from '../../../assets/img/TheFourthElement.png'
import TheFourthElementProyectIMG from '../../../assets/img/TheFourthElementProyect.png'

const TheFourthElementProyect = () => {
    return(
        <article className={styles.articleTheFourthElement}>
                <img className={styles.backgroundIMG} src={TheFourthElementIMG} alt="backgroundIMG" />
                <div className={styles.divLeft}>
                </div>
                <section className={styles.sectionTheFourthElement}>
                    <h2 className={styles.h1TheFourthElement}>The Fourth Element</h2>
                    <div className={styles.divImgP}>
                        <a href="https://the-fourth-element-client.vercel.app/" target="_blank" rel="noreferrer noopener" className={styles.link}>
                            <img className={styles.theFourthElementProyectIMG} src={TheFourthElementProyectIMG} alt="TheFourthElementProyect" />
                            <p className={styles.pInfoTheFourthElement}>Aplicación web que contiene cursos destinado a deportistas de alto rendimiento; este proyecto fue reportado directamente a un experto en el mundo del Coaching y Biología molecular.</p>
                        </a>
                    </div>
                </section>
            </article>
    );
}

export default TheFourthElementProyect;