//This is only intended to match https://github.com/pixijs/bunny-mark/blob/master/src/Bunny.js


import {BunnyMeta} from "./Bunny";

const GRAVITY = 0.75;


export const UpdateMovement = (bunnies:Array<BunnyMeta>, deltaTime:number, bounds:PIXI.Rectangle):Array<BunnyMeta> => {
    //Performance was so awful first time around, now we're going to cheat and mutate the bunny metadata directly
    //byebye map, hello for...
    for(let idx = 0; idx < bunnies.length; idx++) {
        const motion = bunnies[idx];
        //original bunny mark ignores delta time so we will too...
        motion.origin.x += motion.direction.x;
        motion.origin.y += motion.direction.y;
        motion.direction.y += GRAVITY;
    
        if (motion.origin.x > bounds.right) {
            motion.direction.x *= -1;
            motion.origin.x = bounds.right;
        }
        else if (motion.origin.x < bounds.left) {
            motion.direction.x *= -1;
            motion.origin.x = bounds.left;
        }
    
        if (motion.origin.y > bounds.bottom) {
            motion.direction.y *= -0.85;
            motion.origin.y = bounds.bottom;
            if (Math.random() > 0.5) {
                motion.direction.y -= Math.random() * 6;
            }
        }
        else if (motion.origin.y < bounds.top) {
            motion.direction.y = 0;
            motion.origin.y = bounds.top;
        }
    }

    return bunnies;
}