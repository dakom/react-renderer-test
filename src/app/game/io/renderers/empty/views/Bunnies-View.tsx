import * as React from "react";

import {Empty, NullComponent} from "../lib/components/Components";
import {Bunny} from "../../../../world/bunnies/Bunnies-Data";

export const Bunnies = ({texture, bunnies, renderEdges}) => 
(
    <Empty>
        {
            bunnies.map((bunny:Bunny, index) => 
                {
                    if(renderEdges) {
                        return <Empty key={index} texture={texture} x={bunny.position.x} y={bunny.position.y} />
                    } else {
                        return <NullComponent key={index} texture={texture} x={bunny.position.x} y={bunny.position.y} />
                    }
                    
                }
            )
            
        }
    </Empty>
)