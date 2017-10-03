import * as React from "react";
import {WorldState} from "../../../../world/World-State";
interface StatusProps extends WorldState {
    container:PIXI.Container;
    text:string;
    stageWidth:number;
}

export class Status extends React.Component<StatusProps, any> {
    private _text:PIXI.Text;
   
    constructor(props:StatusProps) {
        super(props);
        
        this._text = new PIXI.Text("", {fill: 0xFF00FF})

        this.props.container.addChild(this._text);
    }

    render() {

        

        this._text.text = this.props.text;
        this._text.x = this.props.stageWidth - this._text.width;
        
        return <div>Foo</div>;
    }
}

