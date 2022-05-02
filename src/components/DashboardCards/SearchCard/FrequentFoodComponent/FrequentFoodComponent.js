import React from 'react';
import FoodItem from './FoodItem/FoodItem';
import styles from './FrequentFoodComponent.module.scss';

const FrequentFoodComponent = () => {
    return (
        <div className={styles['frequent-food-card']}>
            <div className={styles['frequent-food-header']}>
                Frequently tracked foods:
            </div>
            <div className={styles['frequent-food-content']}>
                <FoodItem></FoodItem>
                <FoodItem></FoodItem>
                <FoodItem></FoodItem>
                <FoodItem></FoodItem>
                <FoodItem></FoodItem>
                <FoodItem></FoodItem>
                <FoodItem></FoodItem>
                <FoodItem></FoodItem>
                <FoodItem></FoodItem>
                <FoodItem></FoodItem>
            </div>
        </div>
    );
};

export default FrequentFoodComponent;
