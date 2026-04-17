import React, {useState, useRef, ChangeEvent, useEffect} from 'react';
import {motion} from 'framer-motion';
import * as styles from './styles.module.css';

function LinkedIn() {
  const [open, setOpen] = useState<boolean>(false);
    const [link, setLink] = useState<string>('');
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
        setLink(link + ' ');

    }

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleLink = (e : ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setLink(input);
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

    return (
        <motion.button 
            initial={false}
            animate={open ? {width: '80px', borderRadius: '5%'} : {width: '30px', borderRadius: '100%'}}
            className={styles.account_social_button} 
            onKeyDown={handleKeyDown}
            onClick={handleOpen}>
            {open ? 
                <motion.input
                    initial={{opacity: 0}}
                    animate={{opacity: 1, transition: {delay: 0.4}}} 
                    type='text' 
                    className={styles.account_input} 
                    value={link} 
                    onChange={handleLink}
                    onBlur={handleBlur}
                    ref={inputRef}/> : 
                <img />
            }
        </motion.button>
    )
}

export default LinkedIn;