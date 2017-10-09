
import * as React from "react";
import * as PIXI from "pixi.js";

import { Text, Container, Sprite } from "react-pixi-renderer";
import { Bunny } from "../../../../world/bunnies/Bunnies-Data";
import {updateContainerBunnies} from "../../../pixi-io/helpers/Bunnies-Operational";

export class BunniesCheat extends React.Component<any, any> {
    private update:Function;

    constructor(props) {
        super(props)
        this.onAdded = this.onAdded.bind(this);
    }

    onAdded(container: PIXI.Container) {
        this.update = updateContainerBunnies(container);

        console.log("added!");
    }

    render() {
        if(this.update !== undefined) {
            this.update(this.props.texture) (this.props.bunnies);
        }
        return <Container onAdded={this.onAdded} />
    }
}