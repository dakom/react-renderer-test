import { WorldState } from "../world/World-State";

export const loadAssets = (worldState: WorldState): Promise<WorldState> =>
    new Promise(resolve => {
        new PIXI.loaders.Loader()
            .add("bunny", "static/bunny.png")
            .load(res => {
                const texture = res.resources.bunny.texture;
                resolve(Object.assign({}, worldState, {
                    texture: texture
                }))
            })
    });