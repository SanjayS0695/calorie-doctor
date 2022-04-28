import React from 'react';
import NutritionCard from '../../components/DashboardCards/NutritionCard/NutritionCard';
import styles from './BodyContainer.module.scss';

const BodyContainer = () => {
    return (
        <div className={styles['body-container']}>
            <div className={styles['intro']}>
                <h2>Hi Sanjay!</h2>
                <h3>Your day so far</h3>
            </div>
            <div className={styles['dashboard-card']}>
                <NutritionCard></NutritionCard>
                <div className={styles['sub-card']}>
                    <div className={styles['calorie-card']}>Calorie Card</div>
                    <div className={styles['glass-step-card']}>
                        <div className={styles['glass-card']}>Glass Card</div>
                        <div className={styles['step-card']}>Step Card</div>
                    </div>
                    <div className={styles['weight-sleep-card']}>
                        <div className={styles['weight-card']}>Weight Card</div>
                        <div className={styles['sleep-card']}>Sleep Card</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BodyContainer;
