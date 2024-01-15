import styles from './videogamesProject.module.css'
import VideogamesIMG from '../../../assets/img/VideogamesBlack.png'
import VideogamesProjectIMG from '../../../assets/img/VideogamesProject.png'
import { useSelector } from 'react-redux'

const VideogamesProject = () => {

    const language = useSelector(state => state.language);

    const handleObjectives = (event) => {
        const divListVg = document.getElementById("divListVg");
        const divExperience = document.getElementById("divExperienceVg");

        if (event.target.id === 'btnInfoVg') {
            if(divListVg.classList.value === "showOrNot"){
                divListVg.classList.value = "divListOpen";
                divExperience.classList.value = "showOrNot";
            } else{
                divListVg.classList.value = "showOrNot";
            }
        } else if (event.target.id === 'btnExperienceVg') {

            if (divExperience.classList.value === "showOrNot") {
                divExperience.classList.value = "divListOpen";
                divListVg.classList.value = "showOrNot";
            } else {
                divExperience.classList.value = "showOrNot";
            }
        }
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
                <div>
                    <button onClick={handleObjectives} id="btnInfoVg" className="btnObjectives">{language === "Spanish" ? 'Información' : 'Information'}</button>
                    <button onClick={handleObjectives} id="btnExperienceVg" className="btnObjectives">{language === "Spanish" ? 'Experiencia' : 'Experience'}</button>
                </div>
            </section>
            <div className={styles.divRight}>
                <section className='showOrNot' id='divListVg'>
                    <h2 className={styles.h2Objectives}>{language === "Spanish" ? "Proyecto Full Stack" : "Full Stack Proyect"}</h2>
                    {
                        language === "Spanish" &&
                        <div className={styles.divVg}>
                            <h3 className={styles.h3Vg}>Tareas realizadas</h3>
                            <ul className={styles.infoVg}>
                                <li>Crear, estructurar y reformar Base de Datos SQL.</li>
                                <li>Crear CRUD completo para acceder, crear, modificar o eliminar datos.</li>
                                <li>Manejar estados globales para filtrado, ordenamiento y paginado.</li>
                                <li>Componentizar, desarrollar lógica y enrutar componentes de React.</li>
                                <li>Diseñar vistas de la aplicación.</li>
                            </ul>
                            <h3 className={styles.h3Vg}>Front-end</h3>
                            <p className={styles.infoTecVg}>Next.js</p>
                            <h3 className={styles.h3Vg}>Tecnologías Back-end</h3>
                            <p className={styles.infoTecVg}>Node.js - Express - JWT - Jest & Supertest - Nodemailer - Bcrypt.</p>
                            <h3 className={styles.h3Vg}>Base de Datos</h3>
                            <p className={styles.infoTecVg}>MongoDB - Moongose ORM.</p>
                        </div>
                    }
                    {
                        language === "English" &&
                        <div className={styles.divVg}>
                            <h3 className={styles.h3Vg}>Completed Tasks</h3>
                            <ul className={styles.infoVg}>
                                <li>Create, estructurate and reform Data Base SQL.</li>
                                <li>Create complete CRUD for data access, create, modify or delete.</li>
                                <li>Design global states management for filters, orders and paginated.</li>
                                <li>Componentization, logic and routing of React components.</li>
                                <li>Design application views.</li>
                            </ul>
                            <h3 className={styles.h3Vg}>Front-end Technologies</h3>
                            <p className={styles.infoTecVg}>React.js - React Router DOM - Redux - CSS Modules - Axios.</p>
                            <h3 className={styles.h3Vg}>Back-end Technologies</h3>
                            <p className={styles.infoTecVg}>Node.js - Express.</p>
                            <h3 className={styles.h3Vg}>Data Base</h3>
                            <p className={styles.infoTecVg}>PostgreSQL - Sequelize.</p>
                        </div>
                    }
                </section>
                <section className='showOrNot' id='divExperienceVg'>
                    <h2 className={styles.h2Objectives}>{language === "Spanish" ? "Experiencia" : "Experience"}</h2>
                    {   language === "Spanish" &&
                        <h4 className={styles.h4Vg}>Este fue mi primer proyecto individual end-to-end en el que pude trabajar completamente todas las fases del desarrollo web. Desde su comienzo planeando como almacenar la información en una base de datos relacional para generar dichas relaciones entre los juegos y sus géneros, pasando por la parte de servidores y utilizar el ORM y la lógica de Express/Node y así acceder, manipular o eliminar dicha información, y posteriormente pero no menos importante, el lado del cliente donde si bien no se me da muy bien pensar las ideas para que algo quede bonito, pude lograr que cada fragmento de imaginación pudiera quedar plasmado en código y de esta manera verse reflejado en las vistas del mismo.</h4>
                    }
                    {   language === "English" &&
                        <h4 className={styles.h4Vg}>This was my first individual end-to-end project in which I was able to fully work on all phases of web development. From the beginning, planning how to store information in a relational database to generate these relationships between games and their genres, passing through the servers and using the ORM and Express/Node logic and thus access, manipulate or eliminate said information, and later but no less important, the client side where although I am not very good at thinking of ideas to make something look beautiful, I was able to ensure that each fragment of imagination could be captured in code and in this way be reflected in the views of it.</h4>
                    }
                </section>
            </div>
        </article>
    )
}

export default VideogamesProject;