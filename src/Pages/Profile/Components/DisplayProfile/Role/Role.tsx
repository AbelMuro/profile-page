import React from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function Role() {
    return(
        <motion.section 
            className={styles.account_role}
            layout
            >
            <h2>
                Role
            </h2>
            <p>
                Software Engineer
            </p>
        </motion.section>   
    )
}

export default Role;