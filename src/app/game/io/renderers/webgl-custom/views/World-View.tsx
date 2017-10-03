import * as React from "react";
import {Container, Text} from "../lib/components/Components";
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
                    <Status text={getStatus(props)}  />
                </Container>
        }
    </Container>