import React, { useEffect, useState } from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import DateComponent from './DateComponent/DateComponent';
import { getDaysOfTheWeek } from './helper';
import styles from './DateBarComponent.module.scss';

const DateBarComponent = () => {
    const moment = require('moment');
    const [dates, setDates] = useState([]);
    const [currentWeek, setCurrentWeek] = useState(0);
    const [selectedDateId, setSelectedDateId] = useState();
    const [selectedDate, setSelectedDate] = useState();

    useEffect(() => {
        setCurrentWeek(0);
        setSelectedDateId('dateComponent0');
        setSelectedDate(moment().format('DD MMM'));
        setDates(getDaysOfTheWeek(moment()));
    }, []);

    const selectPreviousWeek = () => {
        const requiredWeek = currentWeek - 1;
        setCurrentWeek(requiredWeek);
        setSelectedDateId('dateComponent0');
        setSelectedDate(getStartingDay(requiredWeek).format('DD MMM'));
        setDates(getDaysOfTheWeek(getStartingDay(requiredWeek)));
    };

    const selectNextWeek = () => {
        const requiredWeek = currentWeek + 1;
        setCurrentWeek(requiredWeek);
        setSelectedDateId('dateComponent0');
        setSelectedDate(getStartingDay(requiredWeek).format('DD MMM'));
        setDates(getDaysOfTheWeek(getStartingDay(requiredWeek)));
    };

    const getStartingDay = (currentWeek) => {
        return currentWeek > 0
            ? moment().add(currentWeek * 7, 'days')
            : moment().subtract(currentWeek * -1 * 7, 'days');
    };

    const selectDate = (id, currentDate) => {
        setSelectedDateId(id);
        setSelectedDate(moment(currentDate).format('DD MMM'));
    };

    return (
        <div className={styles['wrapper']}>
            <div className={styles['current-date']}>{selectedDate}</div>
            <div
                className={styles['left-arrow-wrapper']}
                onClick={selectPreviousWeek}
            >
                <div className={styles['arrow']}>
                    <ArrowBackIosNewRoundedIcon></ArrowBackIosNewRoundedIcon>
                </div>
            </div>
            {dates.map((currentDay, i) => (
                <div
                    className={styles['date-main-wrapper']}
                    key={`dateComponent` + i}
                >
                    <DateComponent
                        currentDay={currentDay}
                        id={`dateComponent` + i}
                        selectedDateId={selectedDateId}
                        selectDate={selectDate}
                    />
                </div>
            ))}
            <div
                className={styles['right-arrow-wrapper']}
                onClick={selectNextWeek}
            >
                <div className={styles['arrow']}>
                    <ArrowForwardIosRoundedIcon></ArrowForwardIosRoundedIcon>
                </div>
            </div>
        </div>
    );
};

export default DateBarComponent;
