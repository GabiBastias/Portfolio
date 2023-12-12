import styles from './about.module.css'
import AboutIMG from '../../assets/img/AboutBlack.png'
import { useState } from 'react';

const About = () => {
    const [language, setLanguage] = useState('Spanish');

    const handleClick = (event) => {
        const btnSpanish = document.getElementById('Spanish');
        const btnEnglish = document.getElementById('English');
        if (event.target.id === btnSpanish.id) {
            btnEnglish.classList.remove('buttomPressed');
            btnSpanish.classList.add('buttomPressed');

            setLanguage('Spanish');
        } else if(event.target.id === btnEnglish.id){
            btnSpanish.classList.remove('buttomPressed');
            btnEnglish.classList.add('buttomPressed');

            setLanguage('English');
        }
    }
    
    return(
        <article className={styles.articleAbout}>
            <img className={styles.backgroundIMG} src={AboutIMG} alt="backgroundIMG" />
            <div className={styles.divLeft}>
            </div>
            <section className={styles.sectionAbout}>
                <h2 className={styles.h1About}>About</h2>
                <h4 className={styles.h4Aboout}>FullStack Web Developer - Testing || Javascript - Node.js - ReactJS & Redux - Express - MongoDB - PostgreSQL - Jest</h4>
                <aside className={styles.infoAbout}>
                    {
                        language === 'Spanish' &&
                        <p className={styles.pSpanish}>Hola, mi nombre es Federico Gabriel Bastias Cano de Mendoza, Argentina. Comencé a estudiar programación en la facultad y desde entonces me dediqué a reforzar conocimientos y especializarme. Mi objetivo actual es poder brindar mis conocimientos y soluciones de manera ya sea remota o presencial en empresas de desarrollo de sofware.</p>
                    }
                    {
                        language === 'English' &&
                        <p className={styles.pEnglish}>Hi, my name is Federico Gabriel Bastias Cano from Mendoza, Argentina. I started studying programming in college and since then I dedicated myself to strengthening my knowledge and specializing. My current goal is to be able to work either remotely or in person in software development companies.</p>
                    }
                </aside>
                <div className={styles.divBtn}>
                    <button className={styles.btnLenguage} onClick={handleClick} id="Spanish">Español</button>
                    <button className={styles.btnLenguage} onClick={handleClick} id="English">English</button>
                </div>
            </section>
        </article>
    );
}

export default About;