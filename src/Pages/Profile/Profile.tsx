import React from 'react';
import NavigationBar from './Components/NavigationBar';
import DisplayProfile from './Components/DisplayProfile';
import * as styles from './styles.module.css';

function Profile(){
    return(
        <section className={styles.container}>
            <NavigationBar/>
            <DisplayProfile/>
        </section>
    )
}

export default Profile;