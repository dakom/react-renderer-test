import * as React from 'react';
import * as PIXI from "pixi.js";
import {withPixi, PixiProps} from "../pixi/Pixi";

export interface BunnyMeta {
    origin: {
        x:number;
        y:number;
    }

    direction: {
        x:number;
        y:number;
    }
}

interface _BunnyProps {
    texture:PIXI.Texture;
}

type BunnyProps = _BunnyProps & BunnyMeta & PixiProps;

export const Bunny = withPixi(
    class extends React.PureComponent<BunnyProps,{}> {
        private sprite:PIXI.Sprite;

        constructor(props:BunnyProps) {
            super(props);
        
            this.update = this.update.bind(this);

            this.sprite = new PIXI.Sprite(props.texture);
            props.addChildToParent(this.sprite);

            this.update(props);
        
        }

        update(props:BunnyProps) {
            this.sprite.x = props.origin.x;
            this.sprite.y = props.origin.y;
        }
        componentWillReceiveProps(nextProps:BunnyProps) {
            this.update(nextProps);
        }

        componentWillUnmount() {
            alert("REMOVING BUNNY!!! AHHH!!!"); //<-- this never happens
        }

        render() {
            return null;
        }
    }
)