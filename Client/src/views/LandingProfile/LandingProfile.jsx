/* eslint-disable react/no-unescaped-entities */
import portfolioBackground from '../../assets/img/PortfolioBackground.png'
import profilePicture from '../../assets/img/ProfilePicture.jpg'
import linkedIn from '../../assets/img/linkedIn.png'
import gitHub from '../../assets/img/gitHub.png'
import styles from './landingProfile.module.css'

const LandingProfile = () => {
    return(
        <article className={styles.articleLanding}>
            <img className={styles.backgroundIMG} src={portfolioBackground} alt="backgroundIMG" />
            <div className={styles.divLeft}>
            </div>
            <section className={styles.sectionProfile}>
                <div className={styles.divIMG}>
                    <img className={styles.profilePicture} src={profilePicture} alt='profileIMG'/>
                    <div className={styles.connections}>
                        <a href="https://www.linkedin.com/in/federicobastias/ "target="_blank" rel="noreferrer noopener">
                            <img className={styles.connectionLinkedIn} src={linkedIn} alt='LinkedIn'/>
                        </a>
                        <a href='https://github.com/GabiBastias' target="_blank" rel="noreferrer noopener">
                            <img className={styles.connectionGitHub} src={gitHub} alt='GitHub'/>
                        </a>
                    </div>
                </div>
                <h1 className={styles.h1Home}>Hi, I'm Federico Bastias, Full Stack Developer.</h1>
            </section>
        </article>
    )
}

export default LandingProfile;