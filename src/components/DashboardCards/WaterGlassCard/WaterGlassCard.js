import React from 'react';
import CircularProgressBar from '../../CircularProgressBar/CircularProgressBar';
import LocalDrinkSharpIcon from '@mui/icons-material/LocalDrinkSharp';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import styles from './WaterGlassCard.module.scss';

const WaterGlassCard = () => {
    return (
        <div className={styles['main-container']}>
            <div className={styles['progress-action']}>
                <div className={styles['minus-button']}>
                    <RemoveCircleIcon></RemoveCircleIcon>
                </div>
                <CircularProgressBar
                    backgroundColor={'#8aa250'}
                    currentProgress={20}
                    innerSvg={<LocalDrinkSharpIcon />}
                    progressSpeed={7}
                    svgColour={'#00DFD1'}
                    width={'100px'}
                ></CircularProgressBar>
                <div className={styles['add-button']}>
                    <AddCircleIcon></AddCircleIcon>
                </div>
            </div>
            <div className={styles['progress-content']}>2 of 10 Glasses</div>
        </div>
    );
};

export default WaterGlassCard;
