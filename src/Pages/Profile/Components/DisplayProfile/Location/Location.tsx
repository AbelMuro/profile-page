import React, {useState, ChangeEvent, useEffect, useRef} from 'react';
import {motion} from 'framer-motion';
import icons from './icons';
import * as styles from './styles.module.css';

function Location() {
    const [open, setOpen] = useState<boolean>(false);
    const [location, setLocation] = useState<string>('San Francisco, CA');
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpen = () => {
        setOpen(!open);
    }

    const handleKey = (e: KeyboardEvent) => {
        const key = e.key;

        if(key !== 'Enter') return;

        setOpen(false);
    }

    const handleLocation = (e : ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        setLocation(input);
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


    return (                
        <motion.address 
            layout
            className={styles.account_location} 
            onClick={handleOpen}>
            <img src={icons['location']}/>
            {open ? 
                <input 
                    type='text' 
                    className={styles.account_input}
                    value={location}
                    onBlur={handleBlur}
                    onChange={handleLocation}
                    ref={inputRef}
                    /> : 
                location
            }
        </motion.address>
    )
}

export default Location;