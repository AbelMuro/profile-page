import React, {useState, ChangeEvent, useRef, useEffect} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function AccountName() {
    const [open, setOpen] = useState<boolean>(false);
    const [name, setName] = useState<string>('John Muir');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleKey = (e: KeyboardEvent) => {
        const key = e.key;

        if(key !== 'Enter') return;

        setOpen(false);
    }

    const handleName = (e : ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setName(input);
    }

    const handleBlur = () => {
        setOpen(false);
    }

    useEffect(() => {
        if(!open) return;

        inputRef.current?.focus();
    }, [open])

    useEffect(() => {
        document.addEventListener('keydown', handleKey);

        return () => {
            document.removeEventListener('keydown', handleKey);
        }
    }, [open])

    return open ? 
        <motion.input
            layout 
            type='text' 
            className={styles.account_input} 
            value={name} 
            onChange={handleName} 
            onBlur={handleBlur} 
            ref={inputRef}/> :                   
        <motion.h1 layout className={styles.account_name} onClick={handleOpen}>
            {name}
        </motion.h1>
        
}

export default AccountName;