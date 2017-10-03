import * as PIXI from "pixi.js";

import {Bunny} from "../../../../world/bunnies/Bunnies-Data";
import {WorldState} from "../../../../world/World-State";

export const createBunnyView = (stage:PIXI.Container) => {
    const container = new PIXI.Container();
    stage.addChild(container);
    
    console.log("adding container!");

    return (worldState:WorldState) => {
        const {bunnies, texture} = worldState;
        
        const addBunnies = (amount:number) => {
            
            while(amount--) {
                const bunny = new PIXI.Sprite(texture);
                container.addChild(bunny);
            }
        }

        addBunnies(bunnies.length - container.children.length);

        bunnies.forEach((bunny, index) => {
            container.children[index].position.set(bunny.position.x, bunny.position.y);
        })
    }
}