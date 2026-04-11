import React from 'react';
import * as styles from './styles.module.css';

function MobileNavigationBar(){
    return (
        <nav className={styles.nav_bar}>
            <button className={styles.nav_button}>
                <img className={styles.nav_icon}/>
            </button>
        </nav>
    )
}

export default MobileNavigationBar;