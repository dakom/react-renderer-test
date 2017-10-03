import { emptyObject } from 'fbjs/lib/emptyObject';
import * as React from 'react';
import * as ReactFiberReconciler from 'react-reconciler';

import { Instance, createElement } from '../elements/Elements';
import {prepPropChanges, filterPropKey, applyPayload} from "../props/UpdateProps";


const UPDATE_SIGNAL = {};

const appendChild = (parentInstance:Instance, child:Instance) => {
    //console.log("adding child", child.constructor.name);

    if (parentInstance.children.indexOf(child) !== -1) {
        parentInstance.removeChild(child);
    }
    parentInstance.addChild(child);
}

const removeChild = (parentInstance:Instance, child:Instance) => {
    //console.log("removing child", child.constructor.name);
    parentInstance.removeChild(child);
}

const insertBefore = (parentInstance:Instance, child:Instance, beforeChild:Instance) => {
    //console.log("swapping child", parentInstance.constructor.name, child.constructor.name);

    if (child !== beforeChild) {
        const index = parentInstance.children.indexOf(child);
        if (index !== -1) {
            parentInstance.children.splice(index, 1);
        }
        const beforeIndex = parentInstance.children.indexOf(beforeChild);
        parentInstance.children.splice(beforeIndex, 0, child);
    }
}

export const Renderer = ReactFiberReconciler({
    createInstance(
        type,
        props,
        rootContainerInstance :Instance,
        hostContext,
        internalInstanceHandle,
    ) {
        //console.log("creating", type);

        return createElement(type, props, rootContainerInstance);
    },

    /*
     *  Parent/Child Tree Updates
     */

    appendInitialChild: appendChild,
    appendChild: appendChild,
    appendChildToContainer: appendChild,
    insertBefore: insertBefore,
    insertInContainerBefore: insertBefore,
    removeChild: removeChild,
    removeChildFromContainer: removeChild,

    /*
     *  Sibling Tree Updates
     */

    /*
     * Updates
     */
    finalizeInitialChildren(testElement, type, props, rootContainerInstance) {
        //Give certain children last-minute updates (e.g. to auto-focus)
        return false;
    },


    //prepareUpdate seems to want to take advantage of async updates
    //both options are possible, though it seems option 2 is actually faster for our needs

    //OPTION 1 - use prepare update to filter changes then just apply in commit
    
    prepareUpdate: prepPropChanges,

    commitUpdate(instance:Instance, updatePayload, type, oldProps, newProps, rootContainerInstance, internalInstanceHandle) {
        applyPayload (type) (instance) (updatePayload)
    },
    
    /*
    //option 2 - let everything pass through prep, and then filter in commit
    prepareUpdate() {
        return UPDATE_SIGNAL
    },

    commitUpdate(instance:Instance, updatePayload, type, oldProps, newProps, rootContainerInstance, internalInstanceHandle) {
        
        const keys = Object.keys(newProps)
        .filter(filterPropKey(type))
        .forEach(key => {        
                instance[key] = newProps[key];
        })
    },
*/
    /*
     * Prioritization - maybe return true if object is visually hidden
     */

    shouldDeprioritizeSubtree() {
        return false;
    },
    /*
     * Global side effects between commits
     */

    prepareForCommit() {
        //e.g. maybe temporarily disable all event listeners
        //can also stash global metadata
    },

    resetAfterCommit() {
        
        //e.g. maybe re-enable all event listeners
        //can also restore stashed metadata
    },

    /*
     * Text nodes
     */
    shouldSetTextContent(props) {
        return false;
    },

    resetTextContent(instance:Instance) {
    },

    createTextInstance(text: string, rootContainerInstance, hostContext, internalInstanceHandle) {
        return false;
    },

    commitTextUpdate(textInstance:Instance, oldText, newText) {
        
    },

    /*
     * Ref instance (possibly?)
     */
    getPublicInstance(inst) {
        return inst;
    },

    /*
     * Handle low-priority work
     */
    scheduleDeferredCallback(fn: Function): void {
        if ((window as any).requestIdleCallback) {
            (window as any).requestIdleCallback(fn);
        } else {
            //not a great polyfill but w/e ;)
            setTimeout(fn, 0, { timeRemaining: Infinity });
        }
    },

    /*
     * Internal bookkeeping and flags
     */

    getRootHostContext(rootContainerInstance) {
        return emptyObject;
    },

    getChildHostContext(parentHostContext) {
        return emptyObject;
    },

    //In the future, turn this off ;)
    useSyncScheduling: true,
});


