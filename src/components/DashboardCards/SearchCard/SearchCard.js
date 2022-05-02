import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import SearchBox from './SearchBox/SearchBox';
import FrequentFoodComponent from './FrequentFoodComponent/FrequentFoodComponent';
import SearchResultCard from './SearchResultCard/SearchResultCard';
import styles from './SearchCard.module.scss';

const SearchCard = ({ closeSearchCard }) => {
    const [searchResultCardStatus, setSearchResultCardStatus] = useState(false);
    const [frequentFoodComponent, setfrequentFoodComponent] = useState(true);

    const closeSearchResults = () => {
        setSearchResultCardStatus(false);
        setfrequentFoodComponent(true);
    };

    const handleSearch = () => {
        setSearchResultCardStatus(true);
        setfrequentFoodComponent(false);
    };

    return (
        <div className={styles['search-card']}>
            <div className={styles['header']}>
                <div className={styles['back-btn']} onClick={closeSearchCard}>
                    <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
                </div>
                <div className={styles['search-field']}>
                    <SearchBox handleSearch={handleSearch}></SearchBox>
                </div>
            </div>
            {searchResultCardStatus && (
                <SearchResultCard
                    closeSearchResults={closeSearchResults}
                ></SearchResultCard>
            )}
            {frequentFoodComponent && (
                <FrequentFoodComponent></FrequentFoodComponent>
            )}
        </div>
    );
};

SearchCard.proptypes = {
    closeSearchCard: PropTypes.func,
};

export default SearchCard;
