import {WorldState} from "../../../../world/World-State";

import { createBunnyView} from './Bunnies-View';
import {createStatusView} from "./Status-View";

export const createWorldView = (stage:PIXI.Container) => {
    
        const updateBunnyView = createBunnyView(stage);
        const updateStatusView = createStatusView(stage);
        return (worldState:WorldState) => {
            updateBunnyView (worldState);
            updateStatusView (worldState);
        }
        //console.log(worldState.bunnies)
    }