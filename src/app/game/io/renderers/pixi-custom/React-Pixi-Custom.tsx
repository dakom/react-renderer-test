import * as PIXI from 'pixi.js';
import * as React from 'react';
import { ReactPixi } from 'react-pixi-renderer';

import { getIoRoot } from '../../react-io/React-Io';
import {WorldView} from "./views/World-View"
import {getResizer, getTouchDetector, getRenderer} from "../../pixi-io/Pixi-Io";

export const startPixiCustom = (app:PIXI.Application) => (cheat:boolean) => {
    const resizer = getResizer(app);
    const touchDetector = getTouchDetector(app);
    const renderer = getRenderer(app);

    const Root = getIoRoot (resizer) (touchDetector) (renderer) (WorldView);

    ReactPixi.render(<Root cheat={cheat} />, app.stage, () => console.log("render completed!"));
}