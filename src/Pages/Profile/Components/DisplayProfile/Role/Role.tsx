import React, {useState, useRef, useEffect, ChangeEvent} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function Role() {
    const [open, setOpen] = useState<boolean>(false);
    const [role, setRole] = useState<string>('Software Engineer');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleKey = (e: KeyboardEvent) => {
        const key = e.key;

        if(key !== 'Enter') return;

        setOpen(false);
    }

    const handleRole = (e : ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setRole(input);
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
        <motion.section 
            className={styles.account_role}
            layout
            onClick={handleOpen}
            >
            <h2>
                Role
            </h2>
            {
                open ? 
                <input className={styles.account_input} type='text' value={role} onChange={handleRole} onBlur={handleBlur} ref={inputRef}/> : 
                <p>
                    {role}
                </p>
            }
        </motion.section>   
    )
}

export default Role;