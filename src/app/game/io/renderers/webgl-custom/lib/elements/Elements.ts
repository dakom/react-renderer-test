export interface Instance {
    addChild:(Instance) => void;
    removeChild:(Instance) => void;
    children:Array<Instance>;
}

export const MakeInstance = ():Instance => {
    const children = [];

    return {
        addChild: child => {
            children.push(child);
        },

        removeChild: child => {
            const idx = children.indexOf(child);
            if(idx !== -1) {
                children.splice(idx, 1);
            }
        },

        children: children
    }
}


export const createElement = (type, props, rootContainerInstance):Instance => 
    MakeInstance();

