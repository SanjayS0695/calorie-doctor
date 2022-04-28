import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CircularProgressBar.module.scss';

const CircularProgressBar = ({
    backgroundColor,
    currentProgress,
    innerSvg,
    progressSpeed,
    svgColour,
    width,
}) => {
    const [progressValue, setProgressValue] = useState(0);
    const [progressColor, setProgressColor] = useState('#fff');

    useEffect(() => {
        const root = document.documentElement;
        root?.style.setProperty('--background-color', backgroundColor);
        root?.style.setProperty('--size', width);
    }, []);

    useEffect(() => {
        let value = 0;
        const progress = setInterval(() => {
            value++;
            setProgressColor(`conic-gradient(${svgColour} ${value * 3.6}deg,
                #fff ${value * 3.6}deg)`);

            if (value === currentProgress) {
                setProgressValue(value);
                clearInterval(progress);
            }
        }, progressSpeed);
    }, [currentProgress]);

    return (
        <div
            className={styles['circular-progress']}
            style={{ background: `${progressColor}` }}
        >
            <div
                className={styles['inner-circular-container']}
                style={{ color: `${svgColour}` }}
            >
                {innerSvg}
                <span>{progressValue}%</span>
            </div>
        </div>
    );
};

CircularProgressBar.proptypes = {
    backgroundColor: PropTypes.string,
    innerSvg: PropTypes.object,
    svgColour: PropTypes.string,
    currentProgress: PropTypes.number,
    progressSpeed: PropTypes.number,
    width: PropTypes.string,
};

CircularProgressBar.defaultProps = {
    backgroundColor: '#fff',
    currentProgress: 0,
    progressSpeed: 5,
    svgColour: '#87CEEB',
    width: '110px',
};

export default CircularProgressBar;
