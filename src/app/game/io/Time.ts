//returning frameNow would probably be smoother but less accurate fps
export const getNow = (frameNow:number) => performance.now();