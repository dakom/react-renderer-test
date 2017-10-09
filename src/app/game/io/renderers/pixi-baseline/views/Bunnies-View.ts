import * as PIXI from "pixi.js";

import {Bunny} from "../../../../world/bunnies/Bunnies-Data";
import {WorldState} from "../../../../world/World-State";
import {updateContainerBunnies} from "../../../pixi-io/helpers/Bunnies-Operational";

export const createBunnyView = (stage:PIXI.Container) => {
    const container = new PIXI.Container();
    stage.addChild(container);
    
    const update = updateContainerBunnies(container);

    console.log("adding container!");

    return (worldState:WorldState) => {
        update(worldState.texture) (worldState.bunnies);
    }
}