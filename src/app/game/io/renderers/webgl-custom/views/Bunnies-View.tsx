import * as React from "react";

import {Foo, Container, Sprite} from "../lib/components/Components";
import {Bunny} from "../../../../world/bunnies/Bunnies-Data";

export const Bunnies = ({texture, bunnies}) => 
(
    <Container>
        {
            bunnies.map((bunny:Bunny, index) => 
                {
                    return <Sprite key={index} texture={texture} x={bunny.position.x} y={bunny.position.y} />
                    
                }
            )
            
        }
    </Container>
)