import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import * as styles from './styles.module.css';

function MobileNavigationBar(){
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <>
            <nav className={styles.nav_bar}>
                <button className={styles.nav_button} onClick={handleOpen}>
                    <img className={styles.nav_icon}/>
                </button>
            </nav>    
            <AnimatePresence>
                {open &&
                    <motion.section 
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.3}}}
                        exit={{opacity: 0, transition: {duration: 0.5, delay: 0.5}}}
                        className={styles.overlay}>
                            <motion.ul 
                                initial={{clipPath: 'circle(0px at 10px 10px)'}}
                                animate={{clipPath: 'circle(100%)'}}
                                exit={{clipPath: 'circle(0px at 10px 10px)'}}
                                transition={{duration: 0.7}}
                                className={styles.nav_options}>
                                <li>
                                    <button className={styles.close} onClick={handleOpen}>
                                        <img className={styles.close_icon}/>
                                    </button>
                                </li>
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
                            </motion.ul>
                    </motion.section>                 
                }  
            </AnimatePresence>
        </>
    )
}

export default MobileNavigationBar;