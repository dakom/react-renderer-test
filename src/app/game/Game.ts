import * as PIXI from 'pixi.js';

import {RendererType} from "./renderer/Renderer";
import {ReactPixi, Container,Text} from "react-pixi-renderer";

import { withReactPixiIo } from './io/React-Pixi-Io';
import { withBaselinePixiIo } from './io/Baseline-Pixi-Io';
import { WorldUpdater } from './world/World-Updater';
import {GetInitialWorldState} from "./world/World-State";

import {pixiCustom} from "./renderer/pixi-custom/PixiCustom";
import {pixiBaseline} from "./renderer/pixi-baseline/PixiBaseline";


export const startGame = (rendererType:RendererType) => {
    const app = new PIXI.Application({
        width: window.innerWidth,
        height: window.innerHeight,
        backgroundColor: 0x2a2a2a,
        view: document.getElementById("canvas") as HTMLCanvasElement,
        autoStart: false,
    });

    const initialWorldState = GetInitialWorldState();

    const startRenderer = (() => {
        switch(rendererType) {
            case RendererType.BASELINE_PIXI:
                return pixiBaseline (withBaselinePixiIo (WorldUpdater) (initialWorldState) (app));
            case RendererType.REACT_PIXI:
                return pixiCustom (withReactPixiIo (WorldUpdater) (initialWorldState) (app));
        }
    })();

    startRenderer(app.stage);
    
}