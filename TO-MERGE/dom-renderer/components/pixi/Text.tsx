import * as React from 'react';
import * as PIXI from "pixi.js";
import {withPixi, PixiProps} from "./Pixi";

export interface TextProps extends PixiProps{
    text:string;
    style?:PIXI.TextStyleOptions;
}


export const Text = withPixi(
    class extends React.PureComponent<TextProps,{}> {
        private _text:PIXI.Text;

        constructor(props:TextProps) {
            super(props);

            this._text = new PIXI.Text(props.text, props.style);

            this.props.addChildToParent(this._text);
        }

        componentWillReceiveProps(nextProps:TextProps) {
            this._text.text = nextProps.text;
            this._text.style = new PIXI.TextStyle(nextProps.style);
        }

        render () {
            return null;
        }
    });
