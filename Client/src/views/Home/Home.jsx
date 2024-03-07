/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import portfolioBackground from '../../assets/img/PortfolioBackground2.png'
import profilePicture from '../../assets/img/ProfilePicture2.jpg'
import linkedIn from '../../assets/img/linkedIn.png'
import gitHub from '../../assets/img/gitHub.png'
import resume from '../../assets/img/resume.png'
import styles from './home.module.css'
import { useState } from 'react'
import ContactForm from '../../components/ContactForm/ContactForm'

const Home = ({ language }) => {

    const [formManipulation, setFormManipulation] = useState(false);

    const handleForm = () => {
        setFormManipulation(true);
    }

    const handleClose = () => {
        setFormManipulation(false);
    }

    return(
        <article className={styles.articleHome}>
            <img className={styles.backgroundIMG} src={portfolioBackground} alt="backgroundIMG" />
            <div className={styles.divLeft}>
            </div>
            <section className={styles.sectionProfile}>
                {
                    language === 'Spanish' && 
                    <h1 className={styles.h1Home}>Hola, me llamo Federico Bastias, Full Stack Web Developer.</h1>
                }
                {
                    language === 'English' &&
                    <h1 className={styles.h1Home}>Hi, I'm Federico Bastias, Full Stack Web Developer.</h1>
                }
                <div className={styles.divIMG}>
                    <a href="https://www.linkedin.com/in/federicobastias/" target="_blank" rel="noreferrer noopener" className={styles.aLinkedIn}>
                        <img className={styles.connectionLinkedIn} src={linkedIn} alt='LinkedIn'/>
                    </a>
                    <a href='https://github.com/GabiBastias' target="_blank" rel="noreferrer noopener" className={styles.aGitHub}>
                        <img className={styles.connectionGitHub} src={gitHub} alt='GitHub'/>
                    </a>
                    <img className={styles.profilePicture} width="300" height="300" src={profilePicture} alt='profileIMG'/>
                    <a href="https://drive.google.com/drive/folders/11N9V3bCkvoFNfgKadETtQAIfu0E4qP6O?usp=sharing" target="_blank" rel="noreferrer noopener" className={styles.aResume}>
                        <img className={styles.connectionResume} src={resume} alt="resume" />
                    </a>
                    <button onClick={handleForm} className={styles.btnContactMe}> 
                    {language === "Spanish" ? 'Contacto' : 'Contact'}</button>
                </div>
                <aside className={styles.infoAbout}>
                    {
                        language === 'Spanish' &&
                        <p className={styles.pSpanish}>De Mendoza, Argentina para el mundo.</p>
                    }
                    {
                        language === 'English' &&
                        <p className={styles.pEnglish}>From Mendoza, Argentina to the world.</p>
                    }
                </aside>
            </section>
            <ContactForm language={language} manipulate={formManipulation} handleClose={handleClose} />
        </article>
    )
}

export default Home;