import {WorldState} from "../world/World-State";

export const getStatus = (worldState:WorldState):string => 
    `${worldState.fps} FPS w/ ${worldState.bunnies.length.toString()} Bunnies`