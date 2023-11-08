import styles from './about.module.css'
import AboutIMG from '../../assets/img/About.png'

const About = () => {
    return(
        <article className={styles.articleAbout}>
            <img className={styles.backgroundIMG} src={AboutIMG} alt="backgroundIMG" />
            <div className={styles.divLeft}>
            </div>
            <section className={styles.sectionAbout}>
                <h1 className={styles.h1About}>About</h1>
            </section>
        </article>
    );
}

export default About;