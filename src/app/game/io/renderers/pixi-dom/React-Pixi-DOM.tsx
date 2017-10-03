import * as PIXI from 'pixi.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { getIoRoot } from '../../react-pixi-io/React-Pixi-Io';
import {WorldView} from "./views/World-View"

export const startPixiDOM = (app:PIXI.Application) => {
    const Root = getIoRoot(app) (WorldView);
    
    ReactDOM.render(
        <Root />,
        document.getElementById('canvas')
      );
}