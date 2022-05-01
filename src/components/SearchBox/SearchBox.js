import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './SearchBox.module.scss';

const SearchBox = () => {
    const [searchActive, setSearchActive] = useState(false);

    const onSearchButtonClick = () => {
        setSearchActive(true);
    };

    const onCloseButtonClick = () => {
        setSearchActive(false);
    };

    return (
        <div
            className={`${styles['main-container']} ${
                searchActive && styles['active']
            }`}
        >
            <div
                className={`${styles['search-title']} ${
                    searchActive && styles['active']
                }`}
            >
                <span>Search</span>
            </div>
            <input
                style={{
                    opactity: searchActive ? 1 : 0,
                    width: searchActive ? '100%' : '10%',
                    height: searchActive ? '100%' : '90%',
                    left: searchActive ? '0' : '40%',
                }}
                type="text"
                placeholder="Type to search.."
            ></input>
            <div
                className={`${styles['search-btn']}  ${
                    searchActive && styles['active']
                }`}
                onClick={onSearchButtonClick}
            >
                <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
            </div>
            <div
                className={`${styles['cancel-btn']} ${
                    searchActive && styles['active']
                }`}
                onClick={onCloseButtonClick}
            >
                <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default SearchBox;
