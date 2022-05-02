import React, { useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import styles from './FoodItem.module.scss';

const FoodItem = () => {
    return (
        <div className={styles['frequent-food-item']}>
            <div className={styles['food-header']}>
                <span className={styles['title']}>Tea with Milk and Sugar</span>
                <span className={styles['quantity']}>1.0 teacup</span>
            </div>
            <div className={styles['food-calorie']}>
                <span>73 Cals</span>
            </div>
            <AddRoundedIcon></AddRoundedIcon>
        </div>
    );
};

export default FoodItem;
