import { NavLink } from 'react-router-dom';
import styles from './nav.module.css'

const Nav = () => {
    return(
        <nav className={styles.divNav}>
            <div>
                {/* Logo */}
            </div>
            <ul className={styles.navList}>
                <li><NavLink className={styles.aNav} to='/'>Home</NavLink></li>
                <li><NavLink className={styles.aNav} to='/about'>About Me!</NavLink></li>
            </ul>
        </nav>
    )
}

export default Nav;