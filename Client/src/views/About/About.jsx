import styles from './about.module.css'
import AboutIMG from '../../assets/img/AboutBlack.png'
import { useSelector } from 'react-redux'
import Carousel from '../Carousel Standar/Carousel';
import CarouselAutoplay from '../Carousel Autoplay/CarouselAutoplay';

const About = () => {

    const language = useSelector(state => state.language);

    return(
        <article className={styles.articleAbout}>
            <img className={styles.backgroundIMG} src={AboutIMG} alt="backgroundIMG" />
            <h2 className={styles.h2About}>{language === "Spanish" ? 'Sobre Mi' : 'About Me'}</h2>
            <section className={styles.sectionAbout}>
                <Carousel />
            </section>
            <section className={styles.divRight}>
                <CarouselAutoplay />
            </section>
        </article>
    );
}

export default About;