import React from 'react';
import PropTypes from 'prop-types';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import FoodItem from '../../FoodItem/FoodItem';
import SearchBox from '../../SearchBox/SearchBox';
import styles from './SearchCard.module.scss';

const SearchCard = ({ closeSearchCard }) => {
    return (
        <div className={styles['search-card']}>
            <div className={styles['header']}>
                <div className={styles['back-btn']} onClick={closeSearchCard}>
                    <ArrowBackRoundedIcon></ArrowBackRoundedIcon>
                </div>
                <div className={styles['search-field']}>
                    <SearchBox></SearchBox>
                </div>
            </div>
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
        </div>
    );
};

SearchCard.proptypes = {
    closeSearchCard: PropTypes.func,
};

export default SearchCard;
