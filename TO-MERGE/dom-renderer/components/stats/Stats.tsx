import * as React from 'react';
import * as PIXI from "pixi.js";
import {Text} from "../pixi/Text"
interface StatProps {
    amount:number;
    deltaTime:number;
    parent:PIXI.Container;
}
export const Stats = (props:StatProps) => {
    const fps = Math.round(1000/props.deltaTime).toString();
    return <Text parent={props.parent} text={`${fps} FPS w/ ${props.amount.toString()} Bunnies`} style={{fill: 0xFF00FF}} />;
}
