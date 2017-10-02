
import * as React from 'react';
import * as PIXI from "pixi.js";
import {RenderProps} from "./Renderer";

export interface InputState {
    isTouching:boolean;
}

//app.renderer.plugins.interaction
export const withInput = WrappedComponent =>
    class extends React.PureComponent<RenderProps, InputState> {
        constructor(props:RenderProps) {
            super(props);
            this.state = {
                isTouching: false
            }

            props.app.renderer.plugins.interaction.on('pointerdown', () => {
                console.log("Spawning bunnies!!");
                this.setState({
                    isTouching: true
                })
            });
            props.app.renderer.plugins.interaction.on('pointerup', () => this.setState({
                isTouching: false
            }));
        }

        render() {
            return <WrappedComponent {...this.state} {...this.props} />
        }
    }