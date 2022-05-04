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
    const [footerStatus, setFooterStatus] = useState(true);
    const [savedMealsStatus, setSavedMealsStatus] = useState(false);

    const showMyMeals = () => {
        setSavedMealsStatus(!savedMealsStatus);
        setShowFrequentFood(true);
    };

    const handleFooter = (status) => {
        setFooterStatus(status);
    };

    const showSelectedFoodItems = () => {
        setShowFrequentFood(!showFrequentFood);
        setSavedMealsStatus(false);
        setSearchResultCardStatus(false);
    };

    const closeSearchResults = () => {
        setSearchResultCardStatus(false);
        setSearchBoxStatus(false);
    };

    const handleSearch = () => {
        setSearchResultCardStatus(true);
        setSearchBoxStatus(true);
        setSavedMealsStatus(false);
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
                    handleFooter={handleFooter}
                ></SearchResultCard>
            )}
            {!searchResultCardStatus && (
                <FoodListCard
                    handleFooter={handleFooter}
                    savedMealsStatus={savedMealsStatus}
                    showFrequentFood={showFrequentFood}
                ></FoodListCard>
            )}
            {footerStatus && (
                <div className={styles['footer']}>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={showSelectedFoodItems}
                    >
                        {!showFrequentFood ? 'Hide ' : 'Show '}Food Items
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={showMyMeals}
                    >
                        {savedMealsStatus ? 'Hide ' : 'Show '}My Meals
                    </Button>
                    <Button
                        variant="contained"
                        size="small"
                        onClick={addToMeal}
                    >
                        Add to breakfast
                    </Button>
                </div>
            )}
        </div>
    );
};

SearchCard.proptypes = {
    addToMeal: PropTypes.func,
    closeSearchCard: PropTypes.func,
};

export default SearchCard;
