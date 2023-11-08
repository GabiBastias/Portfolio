import About from '../About/About';
import LandingProfile from '../LandingProfile/LandingProfile';
import VideogamesProyect from '../Proyects/VideogamesProyect/VideogamesProyect';
import TheFourthElementProyect from '../Proyects/TheFourthElementProyect/TheFourthElementProyect';
import styles from './home.module.css'

const Home = () => {
    return(
        <>
            <main className={styles.divHome}>
                <div className={styles.divScroll}>
                    <LandingProfile/>
                </div>
                <div className={styles.divScroll}>
                    <About/>
                </div>
                <div className={styles.divScroll}>
                    <TheFourthElementProyect/>
                </div>
                <div className={styles.divScroll}>
                    <VideogamesProyect/>
                </div>
            </main>
        </>
    )
}

export default Home;