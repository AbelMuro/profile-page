import React, {useState, useEffect, useRef, ChangeEvent} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function Experience() {
    const [open, setOpen] = useState<boolean>(false);
    const [exp, setExp] = useState<string>('10 years');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleKey = (e: KeyboardEvent) => {
        const key = e.key;

        if(key !== 'Enter') return;

        setOpen(false);
    }

    const handleExp = (e : ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setExp(input);
    }

    const handleBlur = () => {
        setOpen(false);
    }

    useEffect(() => {
        if(!open) return;

        inputRef.current?.focus();
    }, [open])

    useEffect(() => {
        if(open)
            document.addEventListener('keydown', handleKey);
        else
            document.removeEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('keydown', handleKey);
        }
    }, [open])

    return(
        <motion.section layout className={styles.account_exp} onClick={handleOpen}>
            <h2>
                Experience
            </h2>
            {open ? 
            <input 
                type='text' 
                className={styles.account_input} 
                value={exp} 
                onChange={handleExp} 
                onBlur={handleBlur} 
                ref={inputRef}/> : <p>
                10 Years
            </p>}
        </motion.section>   
    )
}

export default Experience;