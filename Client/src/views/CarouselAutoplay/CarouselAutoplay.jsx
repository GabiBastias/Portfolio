import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CarouselAutoplay.module.css'
import javascriptICO from "../../assets/img/svg-icons/js-svgrepo-com.svg"
import htmlICO from "../../assets/img/svg-icons/html-5-svgrepo-com.svg"
import cssICO from "../../assets/img/svg-icons/css-3-svgrepo-com.svg"
import nodejsICO from "../../assets/img/svg-icons/nodejs-svgrepo-com.svg"
import reactICO from "../../assets/img/svg-icons/react-svgrepo-com.svg"
import reduxICO from "../../assets/img/svg-icons/redux-svgrepo-com.svg"
import expressICO from "../../assets/img/svg-icons/express-svgrepo-com.svg"
import postgreSQLICO from "../../assets/img/svg-icons/postgresql-svgrepo-com.svg"
import mongoDBICO from "../../assets/img/svg-icons/mongodb-logo-svgrepo-com.svg"
import figmaICO from "../../assets/img/svg-icons/figma-svgrepo-com.svg"
import postmanICO from "../../assets/img/svg-icons/postman-svgrepo-com.svg"
import { useSelector } from "react-redux";


const CarouselAutoplay = () => {

    const language = useSelector(state => state.language);

    const SampleArrow = () => {
        return (
          <div
            style={{ display: "none"}}
          />
        );
    }

    const settingsTechnologies = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 8000,
        autoplaySpeed: 0,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />,
    };

    return (
        <section className={styles.sectionCarousel}>
            <h4 className={styles.h4Aboout}>{language === "Spanish" ? 'Técnologías que utilizo' : "Technologies I use"}</h4>
            <Slider className={styles.carousel} {...settingsTechnologies}>
                <div className={styles.iconSVG}>
                    <img src={javascriptICO} alt="node.js" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img src={htmlICO} alt="node.js" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img src={cssICO} alt="node.js" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img src={nodejsICO} alt="node.js" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img src={reactICO} alt="node.js" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img src={reduxICO} alt="node.js" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img src={expressICO} alt="node.js" width="100px" height="100px"/>
                </div>
            </Slider>
            <h4 className={styles.h4Aboout}>{language === "Spanish" ? 'Bases de Datos' : "Data Bases"}</h4>
            <div className={styles.dataBases}>
                <img src={mongoDBICO} alt="node.js" width="100px" height="100px"/>
                <img src={postgreSQLICO} alt="node.js" width="100px" height="100px"/>
            </div>
            <h4 className={styles.h4Aboout}>{language === "Spanish" ? 'Herramientas' : "Additional Tools"}</h4>
            <div className={styles.dataBases}>
                <img src={figmaICO} alt="node.js" width="100px" height="100px"/>
                <img src={postmanICO} alt="node.js" width="100px" height="100px"/>
            </div>
        </section>
    );
};   

export default CarouselAutoplay;