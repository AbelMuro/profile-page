import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import icons from './icons';
import * as styles from './styles.module.css';

function MobileSideBar() {
    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <AnimatePresence>
            <motion.aside 
                initial={false}
                animate={open ? {width: '180px'} : {width: '40px'}}
                className={styles.sidebar}>
                        <motion.section 
                            initial={false}
                            animate={open ? {opacity: 1, width: '140px', transition: {opacity: {delay: 0.2}}} : {opacity: 0, width: '0px'}}
                            className={styles.sidebar_content}>
                            <button className={styles.sidebar_option}>
                                Profile
                            </button>
                            <button className={styles.sidebar_option}>
                                Details
                            </button>
                            <button className={styles.sidebar_option}>
                                Settings
                            </button>
                            <button className={styles.sidebar_option}>
                                Security
                            </button>
                        </motion.section>
                        <button className={styles.sidebar_button} onClick={handleOpen}>
                            <motion.img 
                                initial={false}
                                animate={open ? {rotate: '180deg'} : {rotate: '0deg'}}
                                key='arrow' 
                                src={icons['arrow']}
                                />
                        </button>
            </motion.aside>            
        </AnimatePresence>

    )
}

export default MobileSideBar;