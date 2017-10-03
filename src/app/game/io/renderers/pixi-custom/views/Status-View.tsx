import * as React from "react";
import {Text} from "react-pixi-renderer";


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

