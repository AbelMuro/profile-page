import React, {useState} from 'react';
import {useMediaQuery} from '~/Common/Hooks';
import TextArea from './TextArea';
import * as styles from './styles.module.css';

function DetailCarousel() {
    const [detail, setDetail] = useState<string>('About Me');
    const [mobile] = useMediaQuery('(max-width: 675px)');

    const handleDetail = (detail: string) => {
        setDetail(detail);
    }

    return (
        <section className={styles.container}>
            {!mobile && <p className={styles.selectedDetail}>
                {detail}
            </p>}
            <ul className={styles.details}>
                <li>
                    <button className={styles.detail_button} onClick={() => handleDetail('About Me')}>
                        About Me
                    </button>
                </li>
                <li>
                    <button className={styles.detail_button} onClick={() => handleDetail('Work History')}>
                        Work History
                    </button>
                </li>
                <li>
                    <button className={styles.detail_button} onClick={() => handleDetail('Projects')}>
                        Projects
                    </button>
                </li>
            </ul>
            {detail === 'About Me' && <TextArea initialState={'You can write whatever here'}/>}
            {detail === 'Work History' && <TextArea initialState={'I worked in some company'}/>}
            {detail === 'Projects' && <TextArea initialState={'I dont have many projects'}/>}
        </section>
    )
}

export default DetailCarousel;