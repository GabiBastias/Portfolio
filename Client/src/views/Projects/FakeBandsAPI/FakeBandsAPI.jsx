/* eslint-disable react/prop-types */
import styles from './fakeBandsAPI.module.css'
import FakeBandsAPIProjectIMG from '../../../assets/img/FakeBandsAPIBlack.png'
import FakeBandsAPIProjectIMGProyect from '../../../assets/img/FakeBandsAPIProject.png'
import typecriptICO from "../../../assets/img/svg-icons/typescript-icon-svgrepo-com.svg"
import reactICO from "../../../assets/img/svg-icons/react-svgrepo-com.svg"
import reduxICO from "../../../assets/img/svg-icons/redux-svgrepo-com.svg"
import nodejsICO from "../../../assets/img/svg-icons/nodejs-svgrepo-com.svg"
import expressICO from "../../../assets/img/svg-icons/express-svgrepo-com.svg"
import mongoDBICO from "../../../assets/img/svg-icons/mongodb-logo-svgrepo-com.svg"

const FakeBandAPI = ({ language }) => {


    const handleObjectives = (event) => {
        const divListFBA = document.getElementById("divListFBA");
        const divExperience = document.getElementById("divExperienceFBA");

        if (event.target.id === 'btnInfoFBA') {
            if(divListFBA.classList.value === "showOrNot"){
                divListFBA.classList.value = "divListOpenFBA";
                divExperience.classList.value = "showOrNot";
            } else{
                divListFBA.classList.value = "showOrNot";
            }
        } else if (event.target.id === 'btnExperienceFBA') {
            if (divExperience.classList.value === "showOrNot") {
                divExperience.classList.value = "divListOpenFBA";
                divListFBA.classList.value = "showOrNot";
            } else {
                divExperience.classList.value = "showOrNot";
            }
        }
    }

    return(
        <article className={styles.articleFakeBandsAPI}>
            <img className={styles.backgroundIMG} src={FakeBandsAPIProjectIMG} alt="backgroundIMG" />
            <div className={styles.divLeft}>
                <section className='showOrNot' id='divListFBA'>
                    <h2 className={styles.h2Objectives}>{language === "Spanish" ? "Proyecto Full Stack" : "Full Stack Proyect"}</h2>
                    {
                        language === "Spanish" &&
                        <div className={styles.divFBA}>
                            <h3 className={styles.h3FBA}>Tareas realizadas</h3>
                            <ul className={styles.infoFBA}>
                                <li>Establecer una conexión ágil con el servidor y su biblioteca de generación para crear bandas ficticias de forma dinámica.</li>
                                <li>Crear puntos de entrada intuitivos y eficientes para que los usuarios accedan y modifiquen datos de bandas ficticias.</li>
                                <li>Implementar una arquitectura REST para proporcionar a los usuarios una interfaz fácil de usar y accesible.</li>
                                <li>Almacenar la información de manera segura en MongoDB, garantizando una gestión eficiente de datos.</li>
                                <li>Diseñar las vistas de la aplicación asegurando una experiencia atractiva y funcional.</li>
                            </ul>
                            <h3 className={styles.h3FBA}>Front-end</h3>
                            <div className={styles.dataBases}>
                                <img className={styles.iconSVG} src={typecriptICO} alt='typescript.js'/>
                                <img className={styles.iconSVG} src={reactICO} alt='react.js'/>
                                <img className={styles.iconSVG} src={reduxICO} alt="redux"/>
                            </div>
                            <h3 className={styles.h3FBA}>Tecnologías Back-end</h3>
                            <div className={styles.dataBases}>
                                <img className={styles.iconSVG} src={nodejsICO} alt='node.js'/>
                                <img className={styles.iconSVG} src={expressICO} alt="express"/>
                            </div>
                            <p className={styles.infoTecFBA}>Faker</p>
                            <br />
                            <h3 className={styles.h3FBA}>Base de Datos</h3>
                            <img className={styles.iconSVG} src={mongoDBICO} alt="mongoDB"/>
                            <p className={styles.infoTecFBA}>Moongose como ORM.</p>
                        </div>
                    }
                    {
                        language === "English" &&
                        <div className={styles.divFBA}>
                            <h3 className={styles.h3FBA}>Completed Tasks</h3>
                            <ul className={styles.infoFBA}>
                                <li>Established a swift connection with the server and its generation library to dynamically create fictional bands.</li>
                                <li>Created intuitive and efficient entry points for users to access and modify data related to fictional bands.</li>
                                <li>Implemented a REST architecture to provide users with an easy-to-use and accessible interface.</li>
                                <li>Stored information securely in MongoDB, ensuring efficient data management and privacy.</li>
                                <li>Designed application views, ensuring an attractive and functional user experience.</li>
                            </ul>
                            <h3 className={styles.h3FBA}>Front-end</h3>
                            <div className={styles.dataBases}>
                                <img className={styles.iconSVG} src={typecriptICO} alt='typescript.js'/>
                                <img className={styles.iconSVG} src={reactICO} alt='react.js'/>
                                <img className={styles.iconSVG} src={reduxICO} alt="redux"/>
                            </div>
                            <h3 className={styles.h3FBA}>Back-end Technologies</h3>
                            <div className={styles.dataBases}>
                                <img className={styles.iconSVG} src={nodejsICO} alt='node.js'/>
                                <img className={styles.iconSVG} src={expressICO} alt="express"/>
                            </div>
                            <p className={styles.infoTecFBA}>Faker</p>
                            <br />                            
                            <h3 className={styles.h3FBA}>Data Base</h3>
                            <img className={styles.iconSVG} src={mongoDBICO} alt="mongoDB"/>
                            <p className={styles.infoTecFBA}>Moongose as ORM.</p>
                        </div>
                    }
                </section>
                <section className='showOrNot' id='divExperienceFBA'>
                    <h2 className={styles.h2Objectives}>{language === "Spanish" ? "Experiencia" : "Experience"}</h2>
                    {
                        language === "Spanish" && 
                        <div>
                            <p className={styles.pFBA}>Crear este proyecto fue una experiencia emocionante y desafiante. Desde que se me ocurrio la idea tuve ciertas dudas en si utilizar la implementación de IA para la generación de bandas pero me desafie a hacer algo que no es muy normal, el solo utilizar JavaScript para realizar la generación automática.</p>

                            <p className={styles.pFBA}>La implementación de la arquitectura REST no solo fue técnica, sino también un ejercicio de diseño centrado en el usuario, asegurando de que la interfaz fuera fácil de usar y accesible para todos. Almacenar la información de manera segura en MongoDB fue un paso crucial para garantizar la integridad de los datos </p>
                            
                            <p className={styles.pFBA}>En resumen, crear este proyecto no solo fue un proceso técnico, sino también un viaje que combinó desafíos emocionantes, soluciones innovadoras y una atención constante a las diferentes implementaciones de las peticiones al servidor.</p>
                        </div>
                    }
                    {
                        language === "English" && 
                        <div>
                            <p className={styles.pFBA}>Creating this project was an exciting and challenging experience. From the moment the idea struck me, I had certain doubts about whether to use AI for band generation, but I challenged myself to do something unconventional, opting to solely use JavaScript for automatic generation.</p>

                            <p className={styles.pFBA}>The implementation of the REST architecture was not just technical but also a user-centric design exercise, ensuring that the interface was user-friendly and accessible to all. Safely storing information in MongoDB was a crucial step to ensure data integrity.</p>

                            <p className={styles.pFBA}>In summary, creating this project was not only a technical process but also a journey that combined thrilling challenges, innovative solutions, and a constant focus on different server request implementations.</p>
                        </div>
                    }
                </section>
            </div>
            <section className={styles.sectionFakeBandsAPI}>
                <h2 className={styles.h1FakeBandsAPI}>{language === "Spanish" ? 'API de Bandas Falsas' : 'Fake Bands API'}</h2>
                <div className={styles.divImgP}>
                    <a href="https://fake-bands-api.vercel.app/" target="_blank" rel="noreferrer noopener" className={styles.link}>
                        <img className={styles.fakeBandAPIProjectIMG} src={FakeBandsAPIProjectIMGProyect} alt="FakeBandAPI" />
                        {
                            language === "Spanish" &&
                            <p className={styles.pInfoFakeBandsAPI}>Este proyecto se centra en la construcción de una API innovadora que se conecta con un servidor para generar y almacenar bandas musicales ficticias. La esencia del proyecto reside en la integración de una biblioteca que genera datos falsos y mediante una lógica de integración se simula una banda.</p>
                        }
                        {
                            language === "English" &&
                            <p className={styles.pInfoFakeBandsAPI}>This project focuses on building an innovative API that connects to a server to generate and store fictional music bands. The essence of the project lies in the integration of a library that generates false data and through integration logic a band is simulated.</p>
                        }
                    </a>
                </div>
                <div>
                    <button onClick={handleObjectives} id="btnInfoFBA" className="btnObjectives">{language === "Spanish" ? 'Información' : 'Information'}</button>
                    <button onClick={handleObjectives} id="btnExperienceFBA" className="btnObjectives">{language === "Spanish" ? 'Experiencia' : 'Experience'}</button>
                </div>
            </section>
        </article>
    );
}

export default FakeBandAPI;