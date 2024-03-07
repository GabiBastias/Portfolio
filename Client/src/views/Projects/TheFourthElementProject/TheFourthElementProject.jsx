/* eslint-disable react/prop-types */
import styles from './theFourthElementProject.module.css'
import TheFourthElementIMG from '../../../assets/img/TheFourthElementBlack.png'
import TheFourthElementProjectIMG from '../../../assets/img/TheFourthElementProject.png'
import nextjsICO from "../../../assets/img/svg-icons/nextjs-svgrepo-com.svg"
import nodejsICO from "../../../assets/img/svg-icons/nodejs-svgrepo-com.svg"
import expressICO from "../../../assets/img/svg-icons/express-svgrepo-com.svg"
import jestICO from "../../../assets/img/svg-icons/jest-snapshot-svgrepo-com.svg"
import mongoDBICO from "../../../assets/img/svg-icons/mongodb-logo-svgrepo-com.svg"

const TheFourthElementProject = ({ language }) => {

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
                            <img className={styles.iconSVG} src={nextjsICO} alt='next.js' width="100px" height="100px"/>
                            <h3 className={styles.h3TFE}>Tecnologías Back-end</h3>
                            <div className={styles.dataBases}>
                                <img src={nodejsICO} alt='node.js' width="100px" height="100px"/>
                                <img src={expressICO} alt="express" width="100px" height="100px"/>
                                <img src={jestICO} alt="jest" width="100px" height="100px"/>
                            </div>
                            <p className={styles.infoTecTFE}>JWT - Supertest - Nodemailer - Bcrypt.</p>
                            <br />
                            <h3 className={styles.h3TFE}>Base de Datos</h3>
                            <img className={styles.iconSVG} src={mongoDBICO} alt="mongoDB" width="100px" height="100px"/>
                            <p className={styles.infoTecTFE}>Moongose como ORM.</p>
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
                            <img className={styles.iconSVG} src={nextjsICO} alt='next.js' width="100px" height="100px"/>
                            <h3 className={styles.h3TFE}>Back-end Technologies</h3>
                            <div className={styles.dataBases}>
                                <img src={nodejsICO} alt='node.js' width="100px" height="100px"/>
                                <img src={expressICO} alt="express" width="100px" height="100px"/>
                                <img src={jestICO} alt="jest" width="100px" height="100px"/>
                            </div>
                            <p className={styles.infoTecTFE}>JWT - Supertest - Nodemailer - Bcrypt.</p>
                            <br />                            
                            <h3 className={styles.h3TFE}>Data Base</h3>
                            <img className={styles.iconSVG} src={mongoDBICO} alt="mongoDB" width="100px" height="100px"/>
                            <p className={styles.infoTecTFE}>Moongose as ORM.</p>
                        </div>
                    }
                </section>
                <section className='showOrNot' id='divExperienceTFE'>
                    <h2 className={styles.h2Objectives}>{language === "Spanish" ? "Experiencia" : "Experience"}</h2>
                    {
                        language === "Spanish" && 
                        <div>
                            <p className={styles.pTFE}>En este proyecto, asumí el rol de liderazgo en el desarrollo de la parte del servidor, colaborando con éxito con dos colegas. Nos embarcamos en la tarea de trabajar con tecnologías clave, como JWT para la autenticación, Jest y Supertest para la prueba de rutas y modelos de base de datos, mailer para el envío de correos electrónicos a los usuarios, y mongoose como ORM, entre otras.</p>

                            <p className={styles.pTFE}>Creamos una API-REST para acceder de manera eficiente a la base de datos, permitiendo la manipulación precisa de datos relacionados con usuarios, cursos y otra información relevante para el desbloqueo de funcionalidades. Los resultados obtenidos fueron óptimos desde el lado del servidor, garantizando un acceso preciso y seguro a la información y las rutas.</p>
                            
                            <p className={styles.pTFE}>Mi liderazgo en la implementación de la parte del servidor fue esencial para el éxito del proyecto, asegurando una colaboración efectiva entre el equipo y una implementación fluida de las tecnologías seleccionadas.</p>
                        </div>
                    }
                    {
                        language === "English" && 
                        <div>
                            <p className={styles.pTFE}>In this project, I took on the leadership role in the development of the server side, successfully collaborating with two colleagues. We embarked on the task of working with key technologies, such as JWT for authentication, Jest and Supertest for testing routes and database models, mailer for sending emails to users, and mongoose as ORM, among others.</p>

                            <p className={styles.pTFE}>We created a REST-API to efficiently access the database, allowing precise manipulation of data related to users, courses and other information relevant to unlocking functionalities. The results obtained were optimal from the server side, guaranteeing precise and secure access to information and routes.</p>

                            <p className={styles.pTFE}>My leadership in the implementation of the server side was essential to the success of the project, ensuring effective collaboration between the team and a smooth implementation of the selected technologies.</p>
                        </div>
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