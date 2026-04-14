import React from 'react';
import icons from './icons';
import * as styles from './styles.module.css';

function DisplayProfile() {
    return(
        <article className={styles.account}>
            <header className={styles.account_header}>
                    <img className={styles.account_image} src={icons['user']}/>
                    <h1 className={styles.account_name}>
                        John Muir
                    </h1>
                    <address className={styles.account_location}>
                        <img src={icons['location']}/>
                        San Francisco, CA
                    </address>
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
            </header>
        </article>
    )
}

export default DisplayProfile;