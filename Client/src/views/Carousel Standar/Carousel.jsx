import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carousel.module.css'
import { useSelector } from 'react-redux';
import { Goals } from './Goals';

const Carousel = () => {

    const language = useSelector(state => state.language);

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };

    return (
        <section className={styles.sectionCarousel}>
            <Slider className={styles.carousel} {...settings}>
                <div className={styles.slideCarousel}>
                    <h2>{language === "Spanish" ? Goals[2].titulo : Goals[2].title}</h2>
                    <p>{language === "Spanish" ? Goals[2].contenido : Goals[2].content}</p>
                </div>
                <div className={styles.slideCarousel}>
                    <h2>{language === "Spanish" ? Goals[1].titulo : Goals[1].title}</h2>
                    <p>{language === "Spanish" ? Goals[1].contenido : Goals[1].content}</p>
                </div>
                <div className={styles.slideCarousel}>
                    <h2>{language === "Spanish" ? Goals[0].titulo : Goals[0].title}</h2>
                    <ul>
                        <li>{language === "Spanish" ? Goals[0].contenido[0] : Goals[0].content[0]}</li>
                        <li>{language === "Spanish" ? Goals[0].contenido[1] : Goals[0].content[1]}</li>
                        <li>{language === "Spanish" ? Goals[0].contenido[2] : Goals[0].content[2]}</li>
                    </ul>
                </div>
            </Slider>
        </section>
    
    );
};   

export default Carousel;