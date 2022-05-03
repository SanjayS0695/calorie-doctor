import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SearchItem from './SearchItem/SearchItem';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import styles from './SearchResultCard.module.scss';
import FoodCard from './FoodCard/FoodCard';

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
                    <FoodCard
                        addFoodItem={addFoodItem}
                        discardFoodItem={discardFoodItem}
                    ></FoodCard>
                </div>
            </div>
        </div>
    );
};

SearchResultCard.prototypes = {
    closeSearchResults: PropTypes.func,
};

export default SearchResultCard;
