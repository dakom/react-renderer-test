import * as PIXI from 'pixi.js';
import {IoDynamics} from "../../../io/IoDynamics";
import {WorldState} from "../../../world/World-State";
import { UpdateWorld} from '../../../world/World-Updater';
import { GetInitialWorldState } from "../../../world/World-State";
import {createWorldView } from "./views/World-View";
import {getNow} from "../../Time";

export const startPixiBaseline = (app: PIXI.Application) => {
   const updateWorldView = createWorldView (app.stage);

    const dynamics: IoDynamics = {
        isTouching: false
    }

    let worldState = GetInitialWorldState();
    let renderCompleted: boolean = true;

    const updateSize = () => {
        dynamics.stageWidth = window.innerWidth;
        dynamics.stageHeight = window.innerHeight;
        
        app.view.setAttribute('width', window.innerWidth.toString());
        app.view.setAttribute('height', window.innerHeight.toString());
        app.renderer.resize(window.innerWidth,window.innerHeight);
    }

    const renderFrame = (frameNow) => {
        if (renderCompleted) {
            const now = getNow(frameNow);

            renderCompleted = false;
            dynamics.deltaTime = dynamics.tick ? now - dynamics.tick : 0;
            dynamics.tick = now;

            //merge io dynamics into old world
            worldState = Object.assign({}, { ioDynamics: dynamics }, worldState);

            //update world
            UpdateWorld(worldState)
                .then(newWorldState => {
                    worldState = newWorldState;
                    updateWorldView (worldState);
                    app.render();
                    renderCompleted = true;
                })
        }
        requestAnimationFrame(renderFrame);
    }
    requestAnimationFrame(renderFrame);

    //Input
    app.renderer.plugins.interaction.on('pointerdown', () => {
        console.log("Spawning bunnies!!");
        dynamics.isTouching = true;
    });
    app.renderer.plugins.interaction.on('pointerup', () => {
        dynamics.isTouching = false;
    });

    //Display
    window.onresize = evt => updateSize();
    updateSize();
}