import styles from './about.module.css'
import AboutIMG from '../../assets/img/AboutBlack.png'
import { useSelector } from 'react-redux'
import { Goals } from './Goals';
import { useEffect, useRef, useState } from 'react';

const About = () => {

    const language = useSelector(state => state.language);
    const [currentIndex, setCurrentIndex] = useState(0);
    const listRef = useRef();


    useEffect(() => {
        const listNode = listRef.current;
        const goalsNode = listNode.querySelectorAll("li > div")[currentIndex];
        if (goalsNode) {
            goalsNode.scrollIntoView({
                behavior: "smooth"
            })
        }

    }, [currentIndex])


    
    const scrollToGoal = (dir) => {
        if (dir === 'prev'){
            setCurrentIndex(curr => {
                const isFirstSlide = currentIndex === 0;
                return isFirstSlide ? 0 : curr - 1;
            });
        } else {
            const isLastSlide = currentIndex === Goals.length - 1;
            if (isLastSlide) {
                setCurrentIndex(currentIndex + 1);
            }
        }
    }

    return(
        <article className={styles.articleAbout}>
            <img className={styles.backgroundIMG} src={AboutIMG} alt="backgroundIMG" />
            <section className={styles.sectionAbout}>
                <h2 className={styles.h2About}>{language === "Spanish" ? 'Sobre Mi' : 'About Me'}</h2>
                <h4 className={styles.h4Aboout}>FullStack Web Developer</h4>
                <h4 className={styles.h4Aboout}>Javascript - Node.js - ReactJS & Redux - Express - MongoDB - PostgreSQL - Jest</h4>
                {/*Imagenes*/}
            </section>
            <div className={styles.divRight}>
                <section className={styles.divListOpen}>
                    <button onClick={() => scrollToGoal('prev')}>prev</button>
                    <button onClick={() => scrollToGoal('next')}>next</button>
                    <div className={styles.divInfoCarousel}>
                        <ul ref={listRef}>
                            {
                                Goals.map((goal, index) =>{
                                    if (goal.title === "Objectives") {
                                        return <li key={index}>
                                            <div>
                                                <h2>{language === "Spanish" ? goal.titulo : goal.title}</h2>
                                                <ul>
                                                    {
                                                        language === "Spanish" ? goal.contenido.map((g, i) => {
                                                            return <li key={i}>
                                                                {g}
                                                            </li>
                                                        }) : goal.content.map((g, i) => {
                                                            return <li key={i}>
                                                                {g}
                                                            </li>
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    } else {
                                        return <li key={index}>
                                            <div>
                                                <h2>{language === "Spanish" ? goal.titulo : goal.title}</h2>
                                                <p>{language === "Spanish" ? goal.contenido : goal.content}</p>
                                            </div>
                                        </li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                </section>
            </div>
        </article>
    );
}

export default About;


    // const handleObjectives = () => {
        // <h2>{language === "Spanish" ? Goals[0].titulo : Goals[0].title}</h2>
        //             <ul>
        //                 <li>{language === "Spanish" ? Goals[0].contenido[0] : Goals[0].content[0]}</li>
        //                 <li>{language === "Spanish" ? Goals[0].contenido[1] : Goals[0].content[1]}</li>
        //                 <li>{language === "Spanish" ? Goals[0].contenido[2] : Goals[0].content[2]}</li>
        //             </ul>
        //             <h2>{language === "Spanish" ? Goals[1].titulo : Goals[1].title}</h2>
        //             <p>{language === "Spanish" ? Goals[1].contenido : Goals[1].content}</p>
        //             <h2>{language === "Spanish" ? Goals[2].titulo : Goals[2].title}</h2>
        //             <p>{language === "Spanish" ? Goals[2].contenido : Goals[2].content}</p>
    //     const btnObjectives = document.getElementById("btnObjectives");
    //     const divList = document.getElementById("divList");
    //     btnObjectives.classList.value === "btnObjectives" ?
    //         btnObjectives.classList.value = "btnObjectivesClosed" :
    //         btnObjectives.classList.value = "btnObjectives";
    //     divList.classList.value === "showOrNot" ?
    //         divList.classList.value = "divListOpen" :
    //         divList.classList.value = "showOrNot";
    // }

    //<button onClick={handleObjectives} id="btnObjectives" className="btnObjectives">{language === "Spanish" ? 'Objetivos' : 'Goals'}</button>

                // {
                //     language === "Spanish" &&
                //     <p className={styles.infoAbout}>Estudié la carrera de Técnico Superior en Programación en UTN-FRM, allí aprendí lenguajes de programación como Java y C++, cómo funciona el hardware y cómo interactúa el software con él, pero no he podido terminarla aun. Tambien estudie en un bootcamp llamado Soy Henry!, y aprendí sobre desarrollo web en general. </p>
                // }
                // { language === "Spanish" && <hr />}
                // {
                //     language === "Spanish" &&
                //     <p className={styles.infoAbout}>Como desarrollador Full Stack tengo gran manejo en JavaScript, React, Redux, HTML, CSS, Node.js, Express, Sequelize, PostgreSQL, MongoDB y Jest para testeos unitarios. Me encuentro en estudios para mejorar mis conocimientos en TypeScript y Java utilizando Spring boot, además de poseer experiencia en el control de versiones con Git/GitHub y en técnologias como Figma, LucidChart, Postman, Swagger, entre otras. Puesto que estoy orientado entornos ágiles, destaco por mi liderazgo, proactividad y resolución de problemas.</p>
                // }
                // {
                //     language === "English" &&
                //     <p className={styles.infoAbout}> I studied to be a Higher Technician in Programming at the UTN-FRM, where I learned programming languages such as Java and C++, how hardware works and how software interacts with it, but I have not been able to finish it yet. I also studied in a bootcamp called Soy Henry!, and I learned about the bases of web development.</p>
                // }
                // { language === "English" && <hr />}
                // {
                //     language === "English" &&
                //     <p className={styles.infoAbout}>As a Full Stack Developer I have a great knowledge of JavaScript, React, Redux, HTML, CSS, Node.js, Express, Sequelize, PostgreSQL, MongoDB y Jest for unity testing. At the moment I am studing to improve my knwoledge on TypeScript y Java using Spring boot, in addition to having experience in control version with Git/GitHub and technologies such as Figma, LucidChart, Postman, Swagger, among others. Since I am oriented to agile environments, I stand out for my leadership, proactivity and problem solving.</p>
                // }
                // {
                //     language === "Spanish" &&
                //     <ul className={styles.ulObjectives}>
                //         <li>Ser visto por el mundo del desarrollo como alguien serio, que todos sepan que lo que tengo para ofrecer es acompañado tanto por calidad como por compromiso.</li>
                //         <br />
                //         <li>Comenzar nuevos proyectos para ganar cada vez más experiencia.</li>
                //         <br />
                //         <li>Conseguir mi primer empleo como desarrollador.</li>
                //         <br />
                //         <li>Aprender diferentes lenguajes que puedan ampliar mis conocimientos.</li>
                //         <br />
                //         <li>Reparar errores de mis últimos proyectos, que al fin al cabo son quienes nos muestran al mundo como developers.</li>
                //     </ul>
                // }
                // {
                //     language === "English" &&
                //     <ul className={styles.ulObjectives}>
                //         <li>To be seen by the development world as someone serious, to let everyone know that what I have to offer is accompanied by both quality and commitment.</li>
                //         <br />
                //         <li>Start new projects to gain more and more experience.</li>
                //         <br />
                //         <li>Getting my first job as a developer.</li>
                //         <br />
                //         <li>Learn different languages that can expand my knowledge.</li>
                //         <br />
                //         <li>Repair errors of my last proyects, which in the end are what show us to the world as developers.</li>
                //     </ul>
                // } 