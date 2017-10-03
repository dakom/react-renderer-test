import * as React from 'react';

import { getIoRoot } from '../../react-io/React-Io';
import {WorldView} from "./views/World-View";
import {getResizer, getTouchDetector, getRenderer} from "../../webgl-io/WebGl-Io";
import {Instance, MakeInstance} from "./lib/elements/Elements";
import {ReactWebGl} from "./lib/LibMain";

export const startWebGlCustom = (ctx) => {
    const Root = MakeInstance();

    const resizer = getResizer(ctx);
    const touchDetector = getTouchDetector();
    const renderer = getRenderer(ctx) (Root);


    const ComponentView = getIoRoot (resizer) (touchDetector) (renderer) (WorldView);

    
    ReactWebGl.render(<ComponentView />, Root, () => console.log("render completed!"));
}