import * as PIXI from "pixi.js";

export const withBaselinePixiIo = (worldUpdater) => (initialWorldState) => (app:PIXI.Application):PIXI.Container => {
    const container = new PIXI.Container();

    return container;
}