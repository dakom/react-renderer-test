import {WorldState} from "../../../../world/World-State";
import {getStatus} from "../../../../strings/StatusStrings";

export const createStatusView = (stage:PIXI.Container) => {
    const statusElement = document.getElementById("status") as HTMLDivElement;

    return (worldState:WorldState) => {
        statusElement.innerText = getStatus(worldState);
    }
}
