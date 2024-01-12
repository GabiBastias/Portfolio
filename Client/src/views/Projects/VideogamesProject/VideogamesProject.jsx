import styles from './videogamesProject.module.css'
import VideogamesIMG from '../../../assets/img/VideogamesBlack.png'
import VideogamesProjectIMG from '../../../assets/img/VideogamesProject.png'
import { useSelector } from 'react-redux'

const VideogamesProject = () => {

    const language = useSelector(state => state.language);

    return(
        <article className={styles.articleVideogames}>
            <img className={styles.backgroundIMG} src={VideogamesIMG} alt="Videogames" />
            <section className={styles.sectionVideogames}>
                <h2 className={styles.h1Videogames}>Videogames</h2>
                <div className={styles.divImgP}>
                    <a href="https://videogames-fgdev.vercel.app/" target="_blank" rel="noreferrer noopener" className={styles.link}>
                        {
                            language === "Spanish" &&
                            <p className={styles.pInfoVideogamesProject}>Es un projecto que te muestra juegos y puedes buscarlos por nombre o ID. La API del projecto tiene mas de 500.000 juegos. Tambien puedes crear tu propio juego.</p>
                        }
                        {
                            language === "English" &&
                            <p className={styles.pInfoVideogamesProject}>This is a project that shows you games and you can search for them by name or ID. This API has more than 500,000 games. Also you can create your own game.</p>
                        }
                        <img className={styles.videogamesProjectIMG} src={VideogamesProjectIMG} alt="VideogamesprojectIMG" />
                    </a>
                </div>
            </section>
            <div className={styles.divRight}>
            </div>
        </article>
    )
}

export default VideogamesProject;