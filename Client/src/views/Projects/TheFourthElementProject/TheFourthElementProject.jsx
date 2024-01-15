import styles from './theFourthElementProject.module.css'
import TheFourthElementIMG from '../../../assets/img/TheFourthElementBlack.png'
import TheFourthElementProjectIMG from '../../../assets/img/TheFourthElementProject.png'
import { useSelector } from 'react-redux'

const TheFourthElementProject = () => {

    const language = useSelector(state => state.language);

    const handleObjectives = (event) => {
        const divListTFE = document.getElementById("divListTFE");
        const divExperience = document.getElementById("divExperienceTFE");

        if (event.target.id === 'btnInfoTFE') {
            if(divListTFE.classList.value === "showOrNot"){
                divListTFE.classList.value = "divListOpen";
                divExperience.classList.value = "showOrNot";
            } else{
                divListTFE.classList.value = "showOrNot";
            }
        } else if (event.target.id === 'btnExperienceTFE') {
            if (divExperience.classList.value === "showOrNot") {
                divExperience.classList.value = "divListOpen";
                divListTFE.classList.value = "showOrNot";
            } else {
                divExperience.classList.value = "showOrNot";
            }
        }
    }

    return(
        <article className={styles.articleTheFourthElement}>
            <img className={styles.backgroundIMG} src={TheFourthElementIMG} alt="backgroundIMG" />
            <div className={styles.divLeft}>
                <section className='showOrNot' id='divListTFE'>
                    <h2 className={styles.h2Objectives}>Back-end Developer</h2>
                    {
                        language === "Spanish" &&
                        <div className={styles.divTFE}>
                            <h3 className={styles.h3TFE}>Tareas realizadas</h3>
                            <ul className={styles.infoTFE}>
                                <li>Crear, estructurar y reformar Base de Datos NoSQL.</li>
                                <li>Crear puntos de entrada y modificar los datos.</li>
                                <li>Implementar pasarela de pagos nacional (Mercadopago) e internacional (Paypal).</li>
                                <li>Encriptar, modificar, registrar, leer y borrar o deshabilitar Usuarios.</li>
                                <li>Testear rutas, modelos y utilidades.</li>
                            </ul>
                            <h3 className={styles.h3TFE}>Front-end</h3>
                            <p className={styles.infoTecTFE}>Next.js</p>
                            <h3 className={styles.h3TFE}>Tecnologías Back-end</h3>
                            <p className={styles.infoTecTFE}>Node.js - Express - JWT - Jest & Supertest - Nodemailer - Bcrypt.</p>
                            <h3 className={styles.h3TFE}>Base de Datos</h3>
                            <p className={styles.infoTecTFE}>MongoDB - Moongose ORM.</p>
                        </div>
                    }
                    {
                        language === "English" &&
                        <div className={styles.divTFE}>
                            <h3 className={styles.h3TFE}>Completed Tasks</h3>
                            <ul className={styles.infoTFE}>
                                <li>Create, estructurate and reform Data Base NoSQL.</li>
                                <li>Create entry points and data modification.</li>
                                <li>Implement payment gateway national (Mercadopago) and international (Paypal).</li>
                                <li>Encript, modify, register, lecture y logical erase of Users.</li>
                                <li>Test routes, models and utils.</li>
                            </ul>
                            <h3 className={styles.h3TFE}>Front-end</h3>
                            <p className={styles.infoTecTFE}>Next.js</p>
                            <h3 className={styles.h3TFE}>Back-end Technologies</h3>
                            <p className={styles.infoTecTFE}>Node.js - Express - JWT - Jest & Supertest - Nodemailer - Bcrypt.</p>
                            <h3 className={styles.h3TFE}>Data Base</h3>
                            <p className={styles.infoTecTFE}>MongoDB - Moongose ORM.</p>
                        </div>
                    }
                </section>
                <section className='showOrNot' id='divExperienceTFE'>
                    <h2 className={styles.h2Objectives}>{language === "Spanish" ? "Experiencia" : "Experience"}</h2>
                    {
                        language === "Spanish" && 
                        <h4 className={styles.h4TFE}>De éste proyecto tuve que tomar el liderazgo del desarrollo de la parte del servidor, con la ayuda de 2 compañeros no dimos a la tarea de trabajar con tecnologías como JWT (autenticación), Jest y Supertest (para testeo de rutas y modelos de base de datos), mailer(envio de emails a usuarios), mongoose (como ORM), entre otros. Realizando una API-REST para acceder a la base de datos y asi manipular tanto datos de usuarios como de cursos o información reelevante de desbloqueo. Los resultados fueron optimos desde el lado del servido y se aseguró el acceso a la información y las rutas de manera correcta.</h4>
                    }
                    {
                        language === "English" && 
                        <h4 className={styles.h4TFE}>In this project I had to take the lead in the development of the server part, with the help of 2 colleagues we took on the task of working with technologies such as JWT (authentication), Jest and Supertest (for testing routes and database models), mailer (sending emails to users), mongoose (as ORM), among others. Performing a REST-API to access the database and thus manipulate both user and course data or relevant unlocking information. The results were optimal from the service side and access to information and routes was ensured correctly.</h4>
                    }
                </section>
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
                <div>
                    <button onClick={handleObjectives} id="btnInfoTFE" className="btnObjectives">{language === "Spanish" ? 'Información' : 'Information'}</button>
                    <button onClick={handleObjectives} id="btnExperienceTFE" className="btnObjectives">{language === "Spanish" ? 'Experiencia' : 'Experience'}</button>
                </div>
            </section>
        </article>
    );
}

export default TheFourthElementProject;