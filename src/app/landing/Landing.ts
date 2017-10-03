import {startMenu} from "./menu/Menu";

export const startLanding = (forceStart?) => {
    const descElement = document.getElementById("desc");

    descElement.innerHTML = 
    `
    Choose any of the above options to start the test, and refresh the page to come back here
<hr/>
    <h2>Baseline-Pixi</h2>
    <p/>
    Non-React. Imperative straight PIXI code.

    <h2>React-Empty</h2>
    <p/>
    Custom renderer with empty nodes (simple featureless js objects)
    
    <h2>React-Pixi-Custom</h2> 
    <p/>
    A custom React renderer using native PIXI classes. <p/>Available at <a href="https://github.com/dakom/react-pixi-renderer">react-pixi-renderer</a>
    
    <h2>React-Pixi-Dom</h2>
    <p/>
    Using standard ReactDOM by via Higher Order Components and rendering null at the edges
    
    <h2>ReactWebGl</h2>
    <p/>
    (TODO)
    
    `

    return startMenu (forceStart)
        .then(p => {
            document.body.removeChild(document.getElementById("landing"))
            return p;
        });
}
