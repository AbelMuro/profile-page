import React, {useState, ChangeEvent, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function Email() {
    const [email, setEmail] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleKey = (e: KeyboardEvent) => {
        const key = e.key;

        if(key !== 'Enter') return;

        setOpen(false);
    }

    const handleKeyDown = (e : React.KeyboardEvent<HTMLButtonElement>) => {
        const key = e.key;

        if(key !== ' ') return; 
        
        e.preventDefault();
        setEmail(email + ' ');
    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleEmail = (e : ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setEmail(input);
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
        <motion.button 
            initial={false}
            animate={open ? {width: '80px', borderRadius: '5%'} : {width: '30px', borderRadius: '100%'}}
            onKeyDown={handleKeyDown}
            className={styles.account_social_button} 
            onClick={handleOpen}>
            {open ? 
                <motion.input
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {delay: 0.4}}} 
                    type='text' 
                    className={styles.account_input} 
                    value={email} 
                    onChange={handleEmail}
                    onBlur={handleBlur}
                    ref={inputRef}/> : 
                <img />
            }
        </motion.button>
    )
}

export default Email;