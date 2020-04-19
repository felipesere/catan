import * as React from 'react';

import './hexagon.css';

import {IHexagon} from '../../types';

interface IHexagonProps extends IHexagon {
    index: number;
}

export default function Hexagon(props: IHexagonProps) {
    return (
        <div>
            <div className={`${props.terrain} hex hex-${props.index} hexagonal`}/>
        </div>
    )
};

/*
function Hexagon(props: IHexagonProps) {
    const frequentRoll = (props.dieRoll === 6 || props.dieRoll === 8);
    return (
    <div className={"hex hex-" + props.index + " " + props.terrain}>
        <div className="hexagon">
            <div className="hexTop"/>
            <div className="hexBottom"/>
        </div>
        <span className={"die-roll " + (frequentRoll ? "frequent" : "")}>
            {props.dieRoll}
        </span>
    </div>
);
}
 */

