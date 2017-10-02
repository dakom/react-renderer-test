import * as PIXI from "pixi.js";
import * as React from "react";
import {Text, Container, Sprite} from "react-pixi-renderer";
import {Bunnies} from "./Bunnies-View";
import {Status} from "./Status-View";

export const WorldView = props => 
    <Container>
        {
            (!props.texture) 
            ?   <Text text={(props.texture) ? "ready!" :  "loading..."} style={{fill: 0xFF00FF}} />
            :   <Container>
                    <Bunnies texture={props.texture} bunnies={props.bunnies} /> 
                    <Status deltaTime={props.ioDynamics.deltaTime} bunnies={props.bunnies} stageWidth={props.ioDynamics.stageWidth} />
                </Container>
        }
    </Container>
    