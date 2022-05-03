import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchBox from './SearchBox/SearchBox';
import FoodListCard from './FrequentFoodComponent/FoodListCard';
import SearchResultCard from './SearchResultCard/SearchResultCard';
import Button from '@mui/material/Button';
import styles from './SearchCard.module.scss';

const SearchCard = ({ addToMeal, closeSearchCard }) => {
    const [searchResultCardStatus, setSearchResultCardStatus] = useState(false);
    const [showFrequentFood, setShowFrequentFood] = useState(true);
    const [searchBoxStatus, setSearchBoxStatus] = useState(false);

    const showSelectedFoodItems = () => {
        setShowFrequentFood(!showFrequentFood);
        setSearchResultCardStatus(false);
    };

    const closeSearchResults = () => {
        setSearchResultCardStatus(false);
        setSearchBoxStatus(false);
    };

    const handleSearch = () => {
        setSearchResultCardStatus(true);
        setSearchBoxStatus(true);
    };

    return (
        <div className={styles['search-card']}>
            <div className={styles['header']}>
                <div className={styles['back-btn']} onClick={closeSearchCard}>
                    <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
                </div>
                <div className={styles['search-field']}>
                    <SearchBox
                        handleSearch={handleSearch}
                        searchBoxStatus={searchBoxStatus}
                    ></SearchBox>
                </div>
            </div>
            {searchResultCardStatus && (
                <SearchResultCard
                    closeSearchResults={closeSearchResults}
                ></SearchResultCard>
            )}
            {!searchResultCardStatus && (
                <FoodListCard
                    showFrequentFood={showFrequentFood}
                ></FoodListCard>
            )}
            <div className={styles['footer']}>
                <Button
                    variant="contained"
                    size="small"
                    onClick={showSelectedFoodItems}
                >
                    {!showFrequentFood ? 'Hide ' : 'Show '}Meal
                </Button>
                <div className={styles['total-calories']}>
                    <h3>356 / 520 Cals</h3>
                </div>
                <Button variant="contained" size="small" onClick={addToMeal}>
                    Add to breakfast
                </Button>
            </div>
        </div>
    );
};

SearchCard.proptypes = {
    addToMeal: PropTypes.func,
    closeSearchCard: PropTypes.func,
};

export default SearchCard;
