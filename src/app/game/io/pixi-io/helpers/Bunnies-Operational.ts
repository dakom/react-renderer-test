import {Bunny} from "../../../../world/bunnies/Bunnies-Data";

export const updateContainerBunnies = (container:PIXI.Container) => (texture:PIXI.Texture) => (bunnies:Array<Bunny>) => {

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