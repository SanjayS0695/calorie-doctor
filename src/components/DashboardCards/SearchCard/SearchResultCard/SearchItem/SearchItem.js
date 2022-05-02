import React from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import styles from './SearchItem.module.scss';

const SearchItem = ({ selectFood }) => {
    return (
        <div className={styles['wrapper']}>
            <div className={styles['title']}>
                <span>Chicken Curry</span>
            </div>
            <div className={styles['add-btn']} onClick={selectFood}>
                <AddRoundedIcon></AddRoundedIcon>
            </div>
        </div>
    );
};

export default SearchItem;
