import React from 'react'
import DateBarComponent from '../../components/DateBarComponent/DateBarComponent'
import styles from './NavBarContainer.module.scss'

const NavBarContainer = () => {
    return (
        <div className={styles['nav-bar-container']}>
            <div className={styles['date-bar-wrapper']}>
                <DateBarComponent></DateBarComponent>
            </div>
        </div>
    )
}

export default NavBarContainer
