/* eslint-disable react/prop-types */
import styles from './about.module.css'
import AboutIMG from '../../assets/img/AboutBlack.png'
import Carousel from '../CarouselStandar/Carousel';
import CarouselAutoplay from '../CarouselAutoplay/CarouselAutoplay';

const About = ({ language }) => {

    return(
        <article className={styles.articleAbout}>
            <img className={styles.backgroundIMG} src={AboutIMG} alt="backgroundIMG" />
            <h2 className={styles.h2About}>{language === "Spanish" ? 'Conóceme mejor' : 'Know me better'}</h2>
            <section className={styles.sectionAbout}>
                <Carousel language={language}/>
            </section>
            <section className={styles.divRight}>
                <CarouselAutoplay language={language}/>
            </section>
        </article>
    );
}

export default About;