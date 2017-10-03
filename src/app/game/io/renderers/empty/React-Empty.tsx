import * as React from 'react';

import { getIoRoot } from '../../react-io/React-Io';
import {WorldView} from "./views/World-View";
import {getResizer, getTouchDetector, getRenderer} from "../../webgl-io/WebGl-Io";
import {Instance, MakeInstance} from "./lib/elements/Elements";
import {ReactEmpty} from "./lib/LibMain";

export const startReactEmpty = (ctx) => {
    const Root = MakeInstance();

    const resizer = getResizer(ctx);
    const touchDetector = getTouchDetector();
    const renderer = getRenderer(ctx) (Root);


    const ComponentView = getIoRoot (resizer) (touchDetector) (renderer) (WorldView);

    
    ReactEmpty.render(<ComponentView />, Root, () => console.log("render completed!"));
}