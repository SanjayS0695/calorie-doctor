import React, { useState } from 'react';
import PropTypes from 'prop-types';
import FoodItem from './FoodItem/FoodItem';
import styles from './FoodListCard.module.scss';

const FoodListCard = ({ showFrequentFood }) => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['header']}>
                {showFrequentFood
                    ? 'Frequently tracked foods:'
                    : 'Selected Food Items:'}
            </div>
            <div className={styles['body']}>
                {showFrequentFood ? (
                    <FoodItem></FoodItem>
                ) : (
                    <FoodItem showAddBtn={false} showDeleteBtn></FoodItem>
                )}
            </div>
        </div>
    );
};

FoodListCard.prototypes = {
    showFrequentFood: PropTypes.bool,
};

FoodListCard.defaultProps = {
    showFrequentFood: true,
};

export default FoodListCard;
