import {startLanding} from "./landing/Landing";
import {startGame} from "./game/Game";
import {RendererType} from "./game/renderer/Renderer";

startLanding(RendererType.BASELINE_PIXI)
//startLanding()
    .then(startGame);