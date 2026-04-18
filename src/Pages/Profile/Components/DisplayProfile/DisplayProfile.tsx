import React from 'react';
import { LayoutGroup } from 'framer-motion';
import AccountImage from './AccountImage';
import AccountName from './AccountName';
import Location from './Location';
import Social from './Social';
import Role from './Role';
import Experience from './Experience';
import DetailCarousel from './DetailCarousel';
import * as styles from './styles.module.css';

function DisplayProfile() {
    return(
        <article className={styles.account}>
            <header className={styles.account_header}>
                <LayoutGroup>
                    <AccountImage/>
                    <AccountName/>
                    <Location/>
                    <Social/>   
                    <Role/>      
                    <Experience/>                      
                </LayoutGroup>
            </header>
            <DetailCarousel/>
        </article>
    )
}

export default DisplayProfile;