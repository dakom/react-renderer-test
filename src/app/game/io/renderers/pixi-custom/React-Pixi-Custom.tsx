import * as PIXI from 'pixi.js';
import * as React from 'react';
import { ReactPixi } from 'react-pixi-renderer';

import { getIoRoot } from '../../react-pixi-io/React-Pixi-Io';
import {WorldView} from "./views/World-View"

export const startPixiCustom = (app:PIXI.Application) => {
    const Root = getIoRoot(app) (WorldView);
    ReactPixi.render(<Root />, app.stage, () => console.log("render completed!"));
}