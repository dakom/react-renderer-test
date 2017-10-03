import * as PIXI from 'pixi.js';

import { startPixiBaseline } from './game/io/renderers/pixi-baseline/Pixi-Baseline';
import { startPixiCustom } from './game/io/renderers/pixi-custom/React-Pixi-Custom';
import { startPixiDOM } from './game/io/renderers/pixi-dom/React-Pixi-DOM';
import {startWebGlCustom} from "./game/io/renderers/webgl-custom/React-WebGl-Custom";
import {startReactEmpty} from "./game/io/renderers/empty/React-Empty";
import { RendererType } from './game/io/RendererType';
import { startLanding } from './landing/Landing';

const rendererMap = {
    [RendererType.BASELINE_PIXI]: startPixiBaseline,
    [RendererType.REACT_EMPTY]: startReactEmpty,
    [RendererType.REACT_PIXI_CUSTOM]: startPixiCustom,
    [RendererType.REACT_PIXI_DOM]: startPixiDOM,
    [RendererType.REACT_WEBGL_CUSTOM]: startWebGlCustom,
}

//startLanding(RendererType.BASELINE_PIXI)
//startLanding(RendererType.REACT_EMPTY)
//startLanding(RendererType.REACT_PIXI_CUSTOM)
//startLanding(RendererType.REACT_PIXI_DOM)
//startLanding(RendererType.REACT_WEBGL_CUSTOM)
startLanding()
    .then((rendererType: RendererType) => {
        const canvas = document.getElementById("canvas") as HTMLCanvasElement;
        
        if(rendererType === RendererType.REACT_WEBGL_CUSTOM || rendererType === RendererType.REACT_EMPTY) {
            const ctx = (canvas.getContext("webgl") as WebGLRenderingContext)  || (canvas.getContext("experimental-webgl") as WebGLRenderingContext);
            rendererMap[rendererType](ctx);
        } else {
            const app = new PIXI.Application({
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: 0x2a2a2a,
                view: canvas,
                autoStart: false,
            });
        
            rendererMap[rendererType](app);
        }
        
    });
