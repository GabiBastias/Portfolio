import styles from './videogamesProject.module.css'
import VideogamesIMG from '../../../assets/img/VideogamesBlack.png'
import VideogamesProjectIMG from '../../../assets/img/VideogamesProject.png'
import { useSelector } from 'react-redux'

const VideogamesProject = () => {

    const language = useSelector(state => state.language);

    const handleObjectives = () => {
        const btnInfoVg = document.getElementById("btnInfoVg");
        const divListVg = document.getElementById("divListVg");
        btnInfoVg.classList.value === "btnObjectives" ?
            btnInfoVg.classList.value = "btnObjectivesClosed" :
            btnInfoVg.classList.value = "btnObjectives";
        divListVg.classList.value === "showOrNot" ?
            divListVg.classList.value = "divListOpen" :
            divListVg.classList.value = "showOrNot";
    }

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
                <button onClick={handleObjectives} id="btnInfoVg" className="btnObjectives">{language === "Spanish" ? 'Información' : 'Information'}</button>
            </section>
            <div className={styles.divRight}>
            <section className='showOrNot' id='divListVg'>
                    <h2 className={styles.h2Objectives}>{language === "Spanish" ? 'En Mantenimiento...' : 'Work in progress...'}</h2>
                </section>
            </div>
        </article>
    )
}

export default VideogamesProject;