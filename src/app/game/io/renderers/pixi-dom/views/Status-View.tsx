import * as React from "react";
import {WorldState} from "../../../../world/World-State";
interface StatusProps extends WorldState {
    container:PIXI.Container;
    text:string;
    stageWidth:number;
}

export class Status extends React.Component<any, any> {
    private statusElement:HTMLDivElement;
    constructor(props) {
        super(props);

        this.statusElement = document.getElementById("status") as HTMLDivElement;
    }

    render() {
        this.statusElement.innerText = this.props.text;

        return null;
    }
}

