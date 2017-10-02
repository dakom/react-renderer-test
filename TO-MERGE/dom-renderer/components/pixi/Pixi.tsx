
import * as React from 'react';
import * as PIXI from "pixi.js";

/* 
    1. every child must be directly given a parent param (this is done automatically for all children in Container)
    2. every child must add itself to its parent (this is done automatically via the withPixi HOC)
    3. every child must remove itself from its parent (also done automatically via the withPixi HOC)
*/

export interface PixiProps extends React.Props<any>{
    parent?:PIXI.Container;
    addChildToParent?:(displayTarget:PIXI.DisplayObject) => void;
}

export const withPixi = WrappedComponent =>
    class extends React.Component<any, {}> {
        private _displayChildren:Array<PIXI.DisplayObject>;

        constructor(props) {
            super(props);
            this.addChildToParent = this.addChildToParent.bind(this);
            this._displayChildren = new Array<PIXI.DisplayObject>();
        }

        addChildToParent(target:PIXI.DisplayObject) {
            //console.log("adding child", target)
            this._displayChildren.push(target);
            this.props.parent.addChild(target);
        }

        componentWillUnmount() {
            //console.log("Removing children", this._displayChildren);
            
            
            this._displayChildren.forEach(child => this.props.parent.removeChild(child));
            this._displayChildren = new Array<PIXI.DisplayObject>();
        }

        render() {
            //console.log(this.props)
            return <WrappedComponent {...this.props} addChildToParent={this.addChildToParent}/>
        }
    }