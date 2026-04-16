import React from 'react';
import Email from './Email';
import Facebook from './Facebook';
import Github from './Github';
import LinkedIn from './LinkedIn';
import {motion} from 'framer-motion';
import icons from './icons';
import * as styles from './styles.module.css';

function Social() {
    return (
        <motion.div layout className={styles.account_social}>
            <Email/>
            <Facebook/>
            <Github/>
            <LinkedIn/>
            <button className={styles.account_message}>
                <img src={icons['message']}/>
                Message
            </button>
            <button className={styles.account_share}>
                <img src={icons['share']}/>
                Share
            </button>
        </motion.div>  
    )
}

export default Social;