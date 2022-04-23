import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './DateComponent.module.scss';

const DateComponent = ({ currentDay, id, selectedDateId, selectDate }) => {
    const getClass = () => {
        if (selectedDateId === id) {
            return '-selected';
        }
        return '';
    };

    return (
        <div
            className={styles[`date-wrapper` + getClass()]}
            onClick={() => selectDate(id, currentDay.currentDate)}
        >
            <p>{currentDay.date}</p>
            <p>{currentDay.day}</p>
        </div>
    );
};

DateComponent.propTypes = {
    day: PropTypes.object,
};

export default DateComponent;
