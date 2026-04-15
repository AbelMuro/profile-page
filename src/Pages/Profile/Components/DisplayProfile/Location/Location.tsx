import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Location() {
    return (                    
        <address className={styles.account_location}>
            <img src={icons['location']}/>
            San Francisco, CA
        </address>
    )
}

export default Location;