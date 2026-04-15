import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function Social() {
    return (
        <div className={styles.account_social}>
            <button className={styles.account_social_button}>
                <img />
            </button>
            <button className={styles.account_social_button}>
                <img />
            </button>
            <button className={styles.account_social_button}>
                <img />
            </button>
            <button className={styles.account_social_button}>
                <img />
            </button>
            <button className={styles.account_message}>
                <img src={icons['message']}/>
                Message
            </button>
            <button className={styles.account_share}>
                <img src={icons['share']}/>
                Share
            </button>
        </div>  
    )
}

export default Social;