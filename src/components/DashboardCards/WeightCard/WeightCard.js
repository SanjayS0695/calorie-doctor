import React from 'react';
import CircularProgressBar from '../../CircularProgressBar/CircularProgressBar';
import MonitorWeightIcon from '@mui/icons-material/MonitorWeight';
import styles from './WeightCard.module.scss';

const WeightCard = () => {
    return (
        <div className={styles['main-container']}>
            <CircularProgressBar
                backgroundColor={'#8aa250'}
                currentProgress={0}
                innerSvg={<MonitorWeightIcon />}
                progressSpeed={7}
                svgColour={'#F29ACD'}
                width={'100px'}
            ></CircularProgressBar>
            <div className={styles['progress-content']}>0.0 of 2.4 lost</div>
        </div>
    );
};

export default WeightCard;
