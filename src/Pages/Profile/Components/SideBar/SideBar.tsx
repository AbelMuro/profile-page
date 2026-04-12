import React from 'react';
import MobileSideBar from './MobileSideBar';
import {useMediaQuery} from '~/Common/Hooks';
import * as styles from './styles.module.css';

function SideBar() {
    const [mobile] = useMediaQuery('(max-width: 750px)');

    return mobile ? <MobileSideBar/> : (
        <aside className={styles.sidebar}>
            <ul className={styles.sidebar_content}>
                <li>
                    <button className={styles.sidebar_option}>
                        Profile
                    </button>
                </li>
                <li>
                    <button className={styles.sidebar_option}>
                        Details
                    </button>
                </li>
                <li>
                    <button className={styles.sidebar_option}>
                        Settings
                    </button>
                </li>
                <li>
                    <button className={styles.sidebar_option}>
                        Security
                    </button>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar;