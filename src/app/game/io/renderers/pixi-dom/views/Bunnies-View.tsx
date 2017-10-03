import * as React from "react";
import {Bunny} from "../../../../world/bunnies/Bunnies-Data";
import { Container } from '../helpers/Container';

import {WorldState} from "../../../../world/World-State";

interface BunnyProp {
    container:PIXI.Container;
    texture:PIXI.Texture;
    x:number;
    y:number;
}

class BunnyComponent extends React.Component<BunnyProp, any> {
    private _sprite:PIXI.Sprite;

    constructor(props:BunnyProp) {
        super(props);

        this._sprite = new PIXI.Sprite(props.texture);
        props.container.addChild(this._sprite);

    }

    render() {
        this._sprite.x = this.props.x;
        this._sprite.y = this.props.y;

        return null;
    }
}

interface BunniesProps {
    container:PIXI.Container;
    texture:PIXI.Texture;
    bunnies:Array<Bunny>;
}
export class Bunnies extends React.Component<BunniesProps, any> {
    private _container:PIXI.Container;
   
    constructor(props:BunniesProps) {
        super(props);

        this._container = new PIXI.Container();
        props.container.addChild(this._container);
    }

    render() {
        return this.props.bunnies.map((bunny:Bunny, index) => 
            <BunnyComponent container={this._container} key={index} texture={this.props.texture} x={bunny.position.x} y={bunny.position.y} />
        );
    }
}