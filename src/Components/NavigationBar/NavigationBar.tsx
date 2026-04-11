import React from 'react';
import MobileNavigationBar from './MobileNavigationBar';
import * as styles from './styles.module.css';
import {useMediaQuery} from '~/Common/Hooks';
import icons from './icons';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 750px)');


    return mobile ? <MobileNavigationBar/>: (
        <nav className={styles.nav_bar}>
            <img className={styles.nav_logo} src={icons['logo']}/>
            <ul className={styles.nav_options}>
                <li>
                    <button className={styles.nav_option}>
                        Home
                    </button> 
                </li>
                <li>
                    <button className={styles.nav_option}>
                        About Us
                    </button> 
                </li>
                <li>
                    <button className={styles.nav_option}>
                        Contact Us
                    </button> 
                </li>
                <li>
                    <button className={styles.nav_option}>
                        Jobs
                    </button> 
                </li>
            </ul>
            <button className={styles.nav_user}>
                <img src={icons['user']}/>
            </button>
        </nav>
    )
}

export default NavigationBar;