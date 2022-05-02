import React, { useState } from 'react';
import SearchItem from './SearchItem/SearchItem';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import image from '../../../../assets/images/chickenCurry.png';
import Button from '@mui/material/Button';
import styles from './SearchResultCard.module.scss';

const SearchResultCard = ({ closeSearchResults }) => {
    const [flipped, setFlipped] = useState(false);

    const selectFood = () => {
        setFlipped(true);
    };

    const discardFoodItem = () => {
        setFlipped(false);
    };

    const addFoodItem = () => {
        setFlipped(false);
    };

    return (
        <div className={styles['main-wrapper']}>
            <div
                className={`${styles['sub-wrapper']}  ${
                    flipped && styles['flipped']
                }`}
            >
                <div
                    className={`${styles['card-face']} ${styles['front-card']}`}
                >
                    <div className={styles['search-result-header']}>
                        <div className={styles['title']}> Search Results:</div>
                    </div>
                    <div className={styles['search-result-body']}>
                        <SearchItem selectFood={selectFood}></SearchItem>
                        <SearchItem selectFood={selectFood}></SearchItem>
                        <SearchItem selectFood={selectFood}></SearchItem>
                        <SearchItem selectFood={selectFood}></SearchItem>
                        <SearchItem selectFood={selectFood}></SearchItem>
                        <SearchItem selectFood={selectFood}></SearchItem>
                        <SearchItem selectFood={selectFood}></SearchItem>
                        <SearchItem selectFood={selectFood}></SearchItem>
                    </div>
                    <div
                        className={styles['close-btn']}
                        onClick={closeSearchResults}
                    >
                        <CloseTwoToneIcon></CloseTwoToneIcon>
                    </div>
                </div>
                <div
                    className={`${styles['card-face']} ${styles['back-card']}`}
                >
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
                            <Button
                                variant="contained"
                                onClick={discardFoodItem}
                            >
                                Discard
                            </Button>
                            <div>Portion</div>
                            <div>Quantity</div>
                            <Button variant="contained" onClick={addFoodItem}>
                                Add
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchResultCard;
