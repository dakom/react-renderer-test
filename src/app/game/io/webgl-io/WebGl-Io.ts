import {NodeInstance} from "../renderers/webgl-custom/lib/elements/Elements";

export const getResizer = (ctx:WebGLRenderingContext) => () => {
    ctx.canvas.setAttribute('width', window.innerWidth.toString());
    ctx.canvas.setAttribute('height', window.innerHeight.toString());
    ctx.viewport(0, 0, window.innerWidth, window.innerHeight); 
}

export const getTouchDetector = ():(() => boolean) => {
    let isTouching:boolean = false;

    window.addEventListener('pointerdown', () => {
        console.log("Spawning bunnies!!");
        isTouching = true;
    });
    window.addEventListener('pointerup', () => {
        isTouching = false;
    });

    return () => isTouching;
}

export const getRenderer = (ctx) => (root:NodeInstance) => {
    return () => {

    };
    
}

