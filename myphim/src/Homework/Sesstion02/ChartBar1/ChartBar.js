import React from 'react';
import classNames from 'classnames/bind';
import styles from './Chart.module.scss';

const cx = classNames.bind(styles);

export default function ChartBar(props) {
    return (
        <div className={cx("chart")}>
            <div className={cx("title")} style={{ backgroundColor: props.color1 }}>
                <span>{props.text}</span>
            </div>
            <div className={cx("module")} style={{ backgroundColor: props.colors, width: props.percentage + "%" }}>
                <div className={cx("text")}>{props.percentage}%</div>
            </div>
        </div>
    )
}
