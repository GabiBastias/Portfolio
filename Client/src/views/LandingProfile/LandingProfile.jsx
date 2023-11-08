import portfolioBackground from '../../assets/img/PortfolioBackground.png'
import profilePicture from '../../assets/img/ProfilePicture.jpg'
import styles from './landingProfile.module.css'

const LandingProfile = () => {
    return(
        <article className={styles.articleLanding}>
            <img className={styles.backgroundIMG} src={portfolioBackground} alt="backgroundIMG" />
            <div className={styles.divLeft}>
            </div>
            <section className={styles.sectionProfile}>
                <img className={styles.profilePicture} src={profilePicture} alt='profileIMG'/>
                <h1 className={styles.h1Home}>Hi, I'm Federico Bastias, Full Stack Developer.</h1>
            </section>
        </article>
    )
}

export default LandingProfile;