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
                animate={open ? {width: '150px'} : {width: '40px'}}
                className={styles.sidebar}>

                        <motion.section 
                            initial={false}
                            animate={open ? {opacity: 1, width: '110px'} : {opacity: 0, width: '0px'}}
                            className={styles.sidebar_content}>
                            
                        </motion.section>
                   
                    <button className={styles.sidebar_button} onClick={handleOpen}>
                        <img src={icons['arrow']}/>
                    </button>
            </motion.aside>            
        </AnimatePresence>

    )
}

export default MobileSideBar;