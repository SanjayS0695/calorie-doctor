import React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import image from '../../../../../assets/images/chickenCurry.png';
import styles from './FoodCard.module.scss';

const FoodCard = ({ addFoodItem, discardFoodItem }) => {
    return (
        <div className={styles['back-card-content']}>
            <div className={styles['back-card-header']}>
                <div className={styles['header-content']}>
                    <div className={styles['section-one']}>
                        <h2>Chicken Curry</h2>
                        <h3>360 Cals</h3>
                        <div className={styles['food-nutrition']}>
                            <div className={styles['row-one']}>
                                <div className={styles['nutrient']}>
                                    <h4>Protien</h4>
                                    <span>11.2g</span>
                                </div>
                                <div className={styles['nutrient']}>
                                    <h4>Carb</h4>
                                    <span>5.9g</span>
                                </div>
                            </div>
                            <div className={styles['row-two']}>
                                <div className={styles['nutrient']}>
                                    <h4>Fat</h4>
                                    <span>10.4g</span>
                                </div>
                                <div className={styles['nutrient']}>
                                    <h4>Fibre</h4>
                                    <span>8g</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['section-two']}>
                        <img
                            src={image}
                            alt="Not Available"
                            className={styles['food-image']}
                        ></img>
                    </div>
                </div>
            </div>
            <div className={styles['back-card-body']}>
                <Button variant="contained" onClick={discardFoodItem}>
                    Discard
                </Button>
                <div>Portion</div>
                <div>Quantity</div>
                <Button variant="contained" onClick={addFoodItem}>
                    Add
                </Button>
            </div>
        </div>
    );
};

FoodCard.prototypes = {
    addFoodItem: PropTypes.func,
    discardFoodItem: PropTypes.func,
};

export default FoodCard;
