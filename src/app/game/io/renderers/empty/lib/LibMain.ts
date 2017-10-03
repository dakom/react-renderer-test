import * as React from 'react';
import {Renderer} from "./renderer/Renderer";

export const ReactEmpty = (function () {
    let container: any;

    return {
        render: (element:any, mountPoint, paintScreen?:() => void) => {
            if (!container) {
                container = Renderer.createContainer(mountPoint);
            }

            /*const doUpdate = () => {
                
            }
*/
            //Kindof just assigning randomly to one of these for now
            //See https://github.com/facebook/react/issues/10950

            Renderer.batchedUpdates(() => {
                console.log("batched updates...");
            });

            Renderer.unbatchedUpdates(() => {
                console.log("unbatched updates...");
            });

            Renderer.flushSync(() => {
                console.log("flushing...");
                Renderer.updateContainer(element, container, undefined, paintScreen);
            });

            Renderer.deferredUpdates(() => {
                console.log("deferred updates...");
            });
        },
    }
})();


