import styles from './nav.module.css'

const Nav = ({ scrollToPage }) => {
    return(
        <nav className={styles.divNav}>
            <div>
                {/* Logo */}
            </div>
            <ul className={styles.navList}>
                <li className={styles.liNav} onClick={() => scrollToPage('Home')}>Home</li>
                <li className={styles.liNav} onClick={() => scrollToPage('About')}>About Me!</li>
                <li className={styles.liNav} onClick={() => scrollToPage('Projects')}>Projects</li>
            </ul>
        </nav>
    )
}

export default Nav;