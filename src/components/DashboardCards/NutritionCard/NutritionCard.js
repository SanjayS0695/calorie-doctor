import React, { useState } from 'react';
import DiningRoundedIcon from '@mui/icons-material/DiningRounded';
import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import CircularProgressBar from '../../CircularProgressBar/CircularProgressBar';
import ProgressBar from '../../ProgressBar/ProgressBar';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import styles from './NutritionCard.module.scss';

const NutritionCard = () => {
    const [displayMealCard, setDisplayMealCard] = useState(false);

    const showMealCard = () => {
        setDisplayMealCard(true);
    };

    const closeMealCard = () => {
        setDisplayMealCard(false);
    };

    return (
        <div className={styles['main-container']}>
            <h2>Nutrition</h2>
            <div className={styles['progress-container']}>
                <CircularProgressBar
                    backgroundColor={'#8aa250'}
                    currentProgress={65}
                    innerSvg={<DiningRoundedIcon />}
                    progressSpeed={7}
                    svgColour={'#FFC950'}
                    width={'100px'}
                ></CircularProgressBar>
                <div className={styles['actions-container']}>
                    <div className={styles['progress-content']}>
                        Eat upto 1,950 Cals
                    </div>
                    <div className={styles['actions']}>
                        <div className={styles['graph-button']}>
                            <EqualizerRoundedIcon></EqualizerRoundedIcon>
                        </div>
                        <div
                            className={styles['add-button']}
                            onClick={showMealCard}
                        >
                            <AddRoundedIcon></AddRoundedIcon>
                        </div>
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
                {displayMealCard && (
                    <div className={styles['meal-card']}>
                        <div className={styles['header']}>
                            <h4>Which meal would you like to track?</h4>
                            <div
                                className={styles['close-meal-card']}
                                onClick={closeMealCard}
                            >
                                <CloseTwoToneIcon></CloseTwoToneIcon>
                            </div>
                        </div>
                        <div className={styles['meal-container']}>
                            <div className={styles['meal-title']}>
                                Breakfast
                            </div>
                            <div className={styles['meal-calories']}>
                                0 of 520 Cal
                            </div>
                            <AddRoundedIcon></AddRoundedIcon>
                        </div>
                        <div className={styles['meal-container']}>
                            <div className={styles['meal-title']}>
                                Morning Snack
                            </div>
                            <div className={styles['meal-calories']}>
                                0 of 520 Cal
                            </div>
                            <AddRoundedIcon></AddRoundedIcon>
                        </div>
                        <div className={styles['meal-container']}>
                            <div className={styles['meal-title']}>Lunch</div>
                            <div className={styles['meal-calories']}>
                                0 of 520 Cal
                            </div>
                            <AddRoundedIcon></AddRoundedIcon>
                        </div>
                        <div className={styles['meal-container']}>
                            <div className={styles['meal-title']}>
                                Evening Snack
                            </div>
                            <div className={styles['meal-calories']}>
                                0 of 520 Cal
                            </div>
                            <AddRoundedIcon></AddRoundedIcon>
                        </div>
                        <div className={styles['meal-container']}>
                            <div className={styles['meal-title']}>Dinner</div>
                            <div className={styles['meal-calories']}>
                                0 of 520 Cal
                            </div>
                            <AddRoundedIcon></AddRoundedIcon>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NutritionCard;
