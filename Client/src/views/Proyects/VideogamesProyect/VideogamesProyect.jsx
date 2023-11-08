import styles from './videogamesProyect.module.css'
import VideogamesIMG from '../../../assets/img/Videogames.png'

const VideogamesProyect = () => {
    return(
        <article className={styles.articleVideogames}>
            <img className={styles.backgroundIMG} src={VideogamesIMG} alt="Videogames" />
            <div className={styles.divLeft}>
            </div>
            <section className={styles.sectionVideogames}>
                <h1 className={styles.h1Videogames}>Videogames</h1>
            </section>
        </article>
    )
}

export default VideogamesProyect;