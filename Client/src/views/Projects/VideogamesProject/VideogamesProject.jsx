import styles from './videogamesProject.module.css'
import VideogamesIMG from '../../../assets/img/Videogames.png'
import VideogamesProjectIMG from '../../../assets/img/VideogamesProject.png'

const VideogamesProject = () => {
    return(
        <article className={styles.articleVideogames}>
            <img className={styles.backgroundIMG} src={VideogamesIMG} alt="Videogames" />
            <div className={styles.divLeft}>
            </div>
            <section className={styles.sectionVideogames}>
                <h2 className={styles.h1Videogames}>Videogames</h2>
                <div className={styles.divImgP}>
                    <a href="https://videogames-fgdev.vercel.app/" target="_blank" rel="noreferrer noopener" className={styles.link}>
                        <img className={styles.videogamesProjectIMG} src={VideogamesProjectIMG} alt="VideogamesprojectIMG" />
                        <p className={styles.pInfoVideogamesProject}>Es un projecto que te muestra juegos y puedes buscarlos por nombre o ID. La API del projecto tiene mas de 500.000 juegos. Tambien puedes crear tu propio juego.</p>
                    </a>
                </div>
            </section>
        </article>
    )
}

export default VideogamesProject;