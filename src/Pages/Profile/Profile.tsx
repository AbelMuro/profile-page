import React from 'react';
import NavigationBar from './Components/NavigationBar';
import SideBar from './Components/SideBar';
import * as styles from './styles.module.css';

function Profile(){
    return(
        <section className={styles.container}>
            <NavigationBar/>
            <SideBar/>
        </section>
    )
}

export default Profile;