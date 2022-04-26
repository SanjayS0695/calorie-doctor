import ReactDOM from 'react-dom/client';
import React from 'react';
import SideBarContainer from './SideBarContainer/SideBarContainer';
import NavBarContainer from './NavBarContainer/NavbarContainer';
import BodyContainer from './BodyContainer/BodyContainer';
import styles from './App.module.scss';

const App = () => {
    return (
        <div className={styles['main-container']}>
            <SideBarContainer></SideBarContainer>
            <NavBarContainer></NavBarContainer>
            <BodyContainer></BodyContainer>
        </div>
    );
};

export default App;
