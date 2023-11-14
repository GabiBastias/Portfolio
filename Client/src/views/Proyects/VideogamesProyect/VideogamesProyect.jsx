import styles from './videogamesProyect.module.css'
import VideogamesIMG from '../../../assets/img/Videogames.png'
import VideogamesProyectIMG from '../../../assets/img/VideogamesProyect.png'

const VideogamesProyect = () => {
    return(
        <article className={styles.articleVideogames}>
            <img className={styles.backgroundIMG} src={VideogamesIMG} alt="Videogames" />
            <div className={styles.divLeft}>
            </div>
            <section className={styles.sectionVideogames}>
                <h2 className={styles.h1Videogames}>Videogames</h2>
                <div className={styles.divImgP}>
                    <a href="https://videogames-fgdev.vercel.app/" target="_blank" rel="noreferrer noopener" className={styles.link}>
                        <img className={styles.videogamesProyectIMG} src={VideogamesProyectIMG} alt="VideogamesProyectIMG" />
                        <p className={styles.pInfoVideogamesProyect}>Es un proyecto que te muestra juegos y puedes buscarlos por nombre o ID. La API del proyecto tiene mas de 500.000 juegos. Tambien puedes crear tu propio juego.</p>
                    </a>
                </div>
            </section>
        </article>
    )
}

export default VideogamesProyect;