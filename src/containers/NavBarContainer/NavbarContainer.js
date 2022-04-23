import React from 'react';
import logo from '../../assets/images/logo.png';
import styles from './NavBarContainer.module.scss';

const NavBarContainer = () => {
    return (
        <div className={styles['nav-bar-container']}>
            {/* <div className={styles['logo']}></div> */}
            <div className={styles['logo']}><img src={logo}></img></div>
        </div>
    )
}

export default NavBarContainer;