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
            className={styles[`date-wrapper${getClass()}`]}
            onClick={() => selectDate(id, currentDay.currentDate)}
        >
            <p className={styles['date']}>{currentDay.date}</p>
            <p className={styles['day']}>{currentDay.day}</p>
        </div>
    );
};

DateComponent.propTypes = {
    currentDay: PropTypes.object,
    id: PropTypes.string,
    selectedDateId: PropTypes.string,
    selectDate: PropTypes.func,
};

export default DateComponent;
