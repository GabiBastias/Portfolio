/* eslint-disable react/prop-types */
import styles from './nav.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { languageSelector } from '../../services/redux/actions';

const Nav = ({ scrollToPage, color }) => {

    const language = useSelector(state => state.language);
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
                <label>{language === "Spanish" ? "Idioma" : "Language" }</label>
                <select id="Language" onChange={handleLanguage}>
                    <option value="Spanish">Español</option>
                    <option value="English">English</option>
                </select>
            </div>
            <ul className={styles.navList}>
                <li className={color} onClick={() => scrollToPage('Home')}>{language === "Spanish" ? 'Inicio' : 'Home'}</li>
                <li className={color} onClick={() => scrollToPage('About')}>{language === "Spanish" ? 'Sobre mi' : 'About me'}</li>
                <li className={color} onClick={() => scrollToPage('TheFourthElement')}>The Fourth Element</li>
                <li className={color} onClick={() => scrollToPage('Videogames')}>Videogames</li>
                <li className={color} onClick={() => scrollToPage('FakeBandAPI')}>{language === "Spanish" ? 'API de Bandas Falsas' : 'Fake Bands API'}</li>
            </ul>
        </nav>
    )
}

export default Nav;