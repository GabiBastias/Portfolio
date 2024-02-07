import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import styles from './Carousel.module.css'
import { useSelector } from 'react-redux';
import { Goals } from '../About/Goals';

const Carousel = () => {

    const language = useSelector(state => state.language);

    return (
        <section className={styles.sectionCarousel}>
            <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
            <SwiperSlide>
                <h2>{language === "Spanish" ? Goals[0].titulo : Goals[0].title}</h2>
                <ul>
                    <li>{language === "Spanish" ? Goals[0].contenido[0] : Goals[0].content[0]}</li>
                    <li>{language === "Spanish" ? Goals[0].contenido[1] : Goals[0].content[1]}</li>
                    <li>{language === "Spanish" ? Goals[0].contenido[2] : Goals[0].content[2]}</li>
                </ul>
            </SwiperSlide>
            <SwiperSlide>
                <h2>{language === "Spanish" ? Goals[1].titulo : Goals[1].title}</h2>
                <p>{language === "Spanish" ? Goals[1].contenido : Goals[1].content}</p>
            </SwiperSlide>
            <SwiperSlide>
                <h2>{language === "Spanish" ? Goals[2].titulo : Goals[2].title}</h2>
                <p>{language === "Spanish" ? Goals[2].contenido : Goals[2].content}</p>
            </SwiperSlide>
            ...
            </Swiper>
        </section>
    );
};


                    
                    

export default Carousel;