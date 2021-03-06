import * as React from "react";

import {Text, Container, Sprite} from "react-pixi-renderer";
import {Bunny} from "../../../../world/bunnies/Bunnies-Data";
import {BunniesCheat} from "./Bunnies-View-Cheat";

export const Bunnies = ({texture, bunnies, cheat}) => 
(cheat) 
    ?   <BunniesCheat texture={texture} bunnies={bunnies} />
    :   <Container>
        {
            bunnies.map((bunny:Bunny, index) => <Sprite key={index} texture={texture} x={bunny.position.x} y={bunny.position.y} />)
        }
        </Container>
        