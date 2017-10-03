import * as React from "react";
import {Empty} from "../lib/components/Components";
import {Bunnies} from "./Bunnies-View";
import {Status} from "./Status-View";
import {WorldState} from "../../../../world/World-State";
import {getStatus} from "../../../../strings/StatusStrings";

export const WorldView = (props:WorldState) => 
    <Empty>
        {
            (!props.texture) 
            ?   <Empty text={(props.texture) ? "ready!" :  "loading..."} style={{fill: 0xFF00FF}} />
            :   <Empty>
                    <Bunnies texture={props.texture} bunnies={props.bunnies} /> 
                    <Status text={getStatus(props)}  />
                </Empty>
        }
    </Empty>