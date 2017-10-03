import {WorldState} from "../../../../world/World-State";
import {getStatus} from "../../../../strings/StatusStrings";

export const createStatusView = (stage:PIXI.Container) => {
    const pixiText = new PIXI.Text("", {fill: 0xFF00FF});
    stage.addChild(pixiText);

    return (worldState:WorldState) => {
        const nBunnies = worldState.bunnies.length;

        pixiText.text = getStatus(worldState);

        pixiText.x = worldState.ioDynamics.stageWidth - pixiText.width;
    }
}
