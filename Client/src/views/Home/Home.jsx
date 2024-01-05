import About from '../About/About';
import LandingProfile from '../../components/LandingProfile/LandingProfile';
import VideogamesProyect from '../Projects/VideogamesProject/VideogamesProject';
import TheFourthElementProyect from '../Projects/TheFourthElementProject/TheFourthElementProyect';
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