import * as React from "react";

import {Empty, NullComponent} from "../lib/components/Components";
import {Bunny} from "../../../../world/bunnies/Bunnies-Data";

export const Bunnies = ({texture, bunnies}) => 
(
    <Empty>
        {
            bunnies.map((bunny:Bunny, index) => 
                {
                    //return <NullComponent texture={texture} x={bunny.position.x} y={bunny.position.y} />
                    return <NullComponent key={index} texture={texture} x={bunny.position.x} y={bunny.position.y} />
                    //return <Empty key={index} texture={texture} x={bunny.position.x} y={bunny.position.y} />
                }
            )
            
        }
    </Empty>
)