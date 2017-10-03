

export const prepPropChanges = (testElement, type, oldProps, newProps, hostContext) => {
    return {}
}

export const applyPayload = type => instance => payload => {
    
    Object.keys(payload)
    .forEach(key => {
        instance[key] = payload[key];
    });
}