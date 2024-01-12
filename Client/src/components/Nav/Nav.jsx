/* eslint-disable react/prop-types */
import styles from './nav.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { languageSelector } from '../../services/redux/actions';

const Nav = ({ scrollToPage }) => {

    const languaje = useSelector(state => state.language);
    const dispatch = useDispatch();

    const handleLanguage = (event) => {
        const pageLanguage = event.target.value;
        if (pageLanguage === "Spanish") {
            dispatch(languageSelector('Spanish'));
        } else if (pageLanguage === "English"){
            dispatch(languageSelector('English'));
        }
    }

    return(
        <nav className={styles.divNav}>
            <div className={styles.divLenguages}>
                <label>{languaje === "Spanish" ? "Idioma" : "Language" }</label>
                <select id="Language" onChange={handleLanguage}>
                    <option value="Spanish">Español</option>
                    <option value="English">English</option>
                </select>
            </div>
            <ul className={styles.navList}>
                <li className={styles.liNav} onClick={() => scrollToPage('Home')}>{languaje === "Spanish" ? 'Inicio' : 'Home'}</li>
                <li className={styles.liNav} onClick={() => scrollToPage('About')}>{languaje === "Spanish" ? 'Sobre mi' : 'About me'}</li>
                <li className={styles.liNav} onClick={() => scrollToPage('Projects')}>{languaje === "Spanish" ? 'Proyectos' : 'Projects'}</li>
                <li className={styles.liNav} onClick={() => scrollToPage('FakeBandAPI')}>{languaje === "Spanish" ? 'API de Bandas Falsas' : 'Fake Band API'}</li>
            </ul>
        </nav>
    )
}

export default Nav;