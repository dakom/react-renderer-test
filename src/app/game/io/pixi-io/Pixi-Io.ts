export const getResizer = (app:PIXI.Application) => () => {
    app.view.setAttribute('width', window.innerWidth.toString());
    app.view.setAttribute('height', window.innerHeight.toString());
    app.renderer.resize(window.innerWidth, window.innerHeight);

}

export const getTouchDetector = (app:PIXI.Application):(() => boolean) => {
    let isTouching:boolean = false;

    app.renderer.plugins.interaction.on('pointerdown', () => {
        console.log("Spawning bunnies!!");
        isTouching = true;
    });
    app.renderer.plugins.interaction.on('pointerup', () => {
        isTouching = false;
    });

    return () => isTouching;
}

export const getRenderer = (app:PIXI.Application) => {
    return () => app.render();
}

