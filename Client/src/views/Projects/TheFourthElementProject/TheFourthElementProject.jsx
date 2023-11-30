import styles from './theFourthElementProject.module.css'
import TheFourthElementIMG from '../../../assets/img/TheFourthElement.png'
import TheFourthElementProjectIMG from '../../../assets/img/TheFourthElementProject.png'

const TheFourthElementProject = () => {
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
                            <p className={styles.pInfoTheFourthElement}>Aplicación web que contiene cursos destinado a deportistas de alto rendimiento; este projecto fue reportado directamente a un experto en el mundo del Coaching y Biología molecular.</p>
                        </a>
                    </div>
                </section>
            </article>
    );
}

export default TheFourthElementProject;