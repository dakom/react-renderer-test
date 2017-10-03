import * as PIXI from 'pixi.js';

import { startPixiBaseline } from './game/io/renderers/pixi-baseline/Pixi-Baseline';
import { startPixiCustom } from './game/io/renderers/pixi-custom/React-Pixi-Custom';
import { startPixiDOM } from './game/io/renderers/pixi-dom/React-Pixi-DOM';
import { RendererType } from './game/io/RendererType';
import { startLanding } from './landing/Landing';

const rendererMap = {
    [RendererType.BASELINE_PIXI]: startPixiBaseline,
    [RendererType.REACT_PIXI]: startPixiCustom,
    [RendererType.REACT_DOM]: startPixiDOM,
}

//startLanding(RendererType.BASELINE_PIXI)
//startLanding(RendererType.REACT_PIXI)
//startLanding(RendererType.REACT_DOM)
startLanding()
    .then((rendererType: RendererType) => {
        const app = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: 0x2a2a2a,
            view: document.getElementById("canvas") as HTMLCanvasElement,
            autoStart: false,
        });
    
        rendererMap[rendererType](app);
    });
