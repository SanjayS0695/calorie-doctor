import React from 'react';
import PropTypes from 'prop-types';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import styles from './FoodItem.module.scss';

const FoodItem = ({ showAddBtn, showDeleteBtn }) => {
    return (
        <div className={styles['frequent-food-item']}>
            <div className={styles['food-header']}>
                <span className={styles['title']}>Tea with Milk and Sugar</span>
                <span className={styles['quantity']}>1.0 teacup</span>
            </div>
            <div className={styles['food-calorie']}>
                <span>73 Cals</span>
            </div>
            {showAddBtn && (
                <AddRoundedIcon
                    sx={{ color: '#f17f53', fontSize: '30px' }}
                ></AddRoundedIcon>
            )}
            {showDeleteBtn && (
                <DeleteOutlineIcon
                    sx={{ color: '#F05542', fontSize: '20px' }}
                ></DeleteOutlineIcon>
            )}
        </div>
    );
};

FoodItem.prototypes = {
    showAddBtn: PropTypes.bool,
    showDeleteBtn: PropTypes.bool,
};

FoodItem.defaultProps = {
    showAddBtn: true,
    showDeleteBtn: false,
};

export default FoodItem;
