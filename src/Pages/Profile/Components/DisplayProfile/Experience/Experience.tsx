import React from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function Experience() {
    return(
        <motion.section layout className={styles.account_exp}>
            <h2>
                Experience
            </h2>
            <p>
                10 Years
            </p>
        </motion.section>   
    )
}

export default Experience;