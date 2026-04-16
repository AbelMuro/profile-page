import React, {useState, useRef, ChangeEvent} from 'react';
import {motion} from 'framer-motion';
import icons from './icons';
import * as styles from './styles.module.css';

function AccountImage() {
    const [file, setFile] = useState<string>(icons['user']);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOpen = () => {
        inputRef.current?.click();
    }

    const handleFile = (e : ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(!file) return;
        setFile(URL.createObjectURL(file));
    }

    return (
        <>
            <motion.img key='account_image' layout className={styles.account_image} src={file} onClick={handleOpen}/>
            <motion.input type='file' layout ref={inputRef} className={styles.input} onChange={handleFile}/>
        </>
        
    )
}

export default AccountImage;