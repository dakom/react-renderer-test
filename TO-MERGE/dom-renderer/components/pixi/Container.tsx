
import * as React from 'react';
import * as PIXI from "pixi.js";

import {withPixi, PixiProps} from "./Pixi";

const Null = () => null;

export const Container = withPixi(
    class extends React.PureComponent<PixiProps,any> {
        private _container:PIXI.Container;

        constructor(props:PixiProps) {
            super(props);

            this._container = new PIXI.Container();
            this.props.addChildToParent(this._container);
        }

        render () {
            return (
                <div>
                {
                    React.Children.map(this.props.children, (child:React.ReactChild) => 
                    React.cloneElement(child as React.ReactElement<any>, {
                        parent: this._container
                    })
                )
                }
                </div>
            )
        }
    });

