import React from 'react';
import DiningRoundedIcon from '@mui/icons-material/DiningRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CircularProgressBar from '../../CircularProgressBar/CircularProgressBar';
import ProgressBar from '../../ProgressBar/ProgressBar';
import styles from './NutritionCard.module.scss';

const NutritionCard = () => {
    return (
        <div className={styles['nutrition-card']}>
            <h2>Nutrition</h2>
            <div className={styles['nutrition-progress']}>
                <div className={styles['nutrition-progress-icon']}>
                    <CircularProgressBar
                        backgroundColor={'#8aa250'}
                        currentProgress={65}
                        innerSvg={<DiningRoundedIcon />}
                        progressSpeed={7}
                        svgColour={'#FFC950'}
                    ></CircularProgressBar>
                </div>
                <div className={styles['nutrition-calories-actions']}>
                    <div className={styles['nutrition-progress-calories']}>
                        Eat upto 1,950 Cals
                    </div>
                    <div className={styles['nutrition-graph-addition']}>
                        <EqualizerRoundedIcon></EqualizerRoundedIcon>
                        <AddRoundedIcon></AddRoundedIcon>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className={styles['nutrition-content']}>
                <div className={styles['first-row']}>
                    <ProgressBar
                        color={'#87CEEB'}
                        value={40}
                        max={100}
                        speed={10}
                        title={'Protien'}
                    ></ProgressBar>
                    <ProgressBar
                        color={'#F29ACD'}
                        value={40}
                        max={100}
                        speed={10}
                        title={'Carbs'}
                    ></ProgressBar>
                </div>
                <div className={styles['second-row']}>
                    <ProgressBar
                        color={'#F8B84E'}
                        value={40}
                        max={100}
                        speed={10}
                        title={'Fats'}
                    ></ProgressBar>
                    <ProgressBar
                        color={'#F05542'}
                        value={40}
                        max={100}
                        speed={10}
                        title={'Fibre'}
                    ></ProgressBar>
                </div>
            </div>
        </div>
    );
};

export default NutritionCard;
