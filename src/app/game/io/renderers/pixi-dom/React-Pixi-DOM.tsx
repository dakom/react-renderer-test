import * as PIXI from 'pixi.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { getIoRoot } from '../../react-io/React-Io';
import {WorldView} from "./views/World-View"
import {getResizer, getTouchDetector, getRenderer} from "../../pixi-io/Pixi-Io";

export const startPixiDOM = (app:PIXI.Application) => {
    const resizer = getResizer(app);
    const touchDetector = getTouchDetector(app);
    const renderer = getRenderer(app);

    const Root = getIoRoot (resizer) (touchDetector) (renderer) ( WorldView(app));
    
    ReactDOM.render(
        <Root />,
        document.getElementById('canvas')
      );
}