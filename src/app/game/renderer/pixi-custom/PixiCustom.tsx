import * as React from 'react';
import {ReactPixi} from 'react-pixi-renderer';

import * as ReactFiberReconciler from 'react-reconciler';

import {WorldView} from "./views/World-View";

export const pixiCustom = WorldSetup => stage => {
    const World = WorldSetup(WorldView);

    ReactPixi.render (<World />, stage);
}


