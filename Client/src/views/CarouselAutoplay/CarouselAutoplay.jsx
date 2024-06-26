/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './CarouselAutoplay.module.css'
import javascriptICO from "../../assets/img/svg-icons/js-svgrepo-com.svg"
import typecriptICO from "../../assets/img/svg-icons/typescript-icon-svgrepo-com.svg"
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


const CarouselAutoplay = ({ language }) => {

    const SampleArrow = () => {
        return (
          <div
            style={{ display: "none"}}
          />
        );
    }

    const settingsTechnologies = {
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 2,
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
                    <img className={styles.iconSVGImg}src={javascriptICO} alt="javascript" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img className={styles.iconSVGImg}src={typecriptICO} alt="typecript" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img className={styles.iconSVGImg}src={htmlICO} alt="html" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img className={styles.iconSVGImg}src={cssICO} alt="css" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img className={styles.iconSVGImg}src={nodejsICO} alt="node.js" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img className={styles.iconSVGImg}src={reactICO} alt="react.js" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img className={styles.iconSVGImg}src={reduxICO} alt="redux" width="100px" height="100px"/>
                </div>
                <div className={styles.iconSVG}>
                    <img className={styles.iconSVGImg}src={expressICO} alt="express" width="100px" height="100px"/>
                </div>
            </Slider>
            <h4 className={styles.h4Aboout}>{language === "Spanish" ? 'Bases de Datos' : "Data Bases"}</h4>
            <div className={styles.dataBases}>
                <img className={styles.iconSVGImg}src={mongoDBICO} alt="mongoDB" width="100px" height="100px"/>
                <img className={styles.iconSVGImg}src={postgreSQLICO} alt="postgreSQL" width="100px" height="100px"/>
            </div>
            <h4 className={styles.h4Aboout}>{language === "Spanish" ? 'Herramientas' : "Additional Tools"}</h4>
            <div className={styles.dataBases}>
                <img className={styles.iconSVGImg}src={figmaICO} alt="figma" width="100px" height="100px"/>
                <img className={styles.iconSVGImg}src={postmanICO} alt="postman" width="100px" height="100px"/>
            </div>
        </section>
    );
};   

export default CarouselAutoplay;