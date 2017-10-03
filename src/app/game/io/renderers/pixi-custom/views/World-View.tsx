import * as PIXI from "pixi.js";
import * as React from "react";
import {Text, Container, Sprite} from "react-pixi-renderer";
import {Bunnies} from "./Bunnies-View";
import {Status} from "./Status-View";
import {WorldState} from "../../../../world/World-State";
import {getStatus} from "../../../../strings/StatusStrings";
export const WorldView = (props:WorldState) => 
    <Container>
        {
            (!props.texture) 
            ?   <Text text={(props.texture) ? "ready!" :  "loading..."} style={{fill: 0xFF00FF}} />
            :   <Container>
                    <Bunnies texture={props.texture} bunnies={props.bunnies} /> 
                    <Status text={getStatus(props)} stageWidth={props.ioDynamics.stageWidth} />
                </Container>
        }
    </Container>