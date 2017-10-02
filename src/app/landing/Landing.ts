import {startMenu} from "./menu/Menu";

export const startLanding = (forceStart?) => {
    const descElement = document.getElementById("desc");

    descElement.innerHTML = 
    `
    Choose any of the above options to start the test, and refresh the page to come back here
    <p/>
    Note: these are not hard numbers to look at - it's more a subjective feel of how far it can be pushed till things slow down.
    <p/>
    So far, results are something like this (where higher is better and indicates roughly were slowdown started to affect enjoyment):
    <p/>
    <b>Baseline (50,000) > ReactPixi (10,000) > ReactDOM (5,000)</b>
<hr/>
    <h2>Baseline Pixi</h2>
    <p/>
    Non-React. Imperative straight PIXI code.
    
    <h2>ReactPixi </h2> 
    <p/>
    A custom React renderer using native PIXI classes. <p/>Available at <a href="https://github.com/dakom/react-pixi-renderer">react-pixi-renderer</a>
    
    <h2>ReactDOM</h2>
    <p/>
    Using standard ReactDOM by via Higher Order Components
    

    <h2>Baseline WebGl (non-react)</h2>
    <p/>
    Imperative straight WebGl code
    <p/><i>TODO</i>
    <p/>
    
    <h2>ReactWebGl</h2>
    <p/>
    A custom WebGl renderer
    <p/>
    <i>TODO</i>
    `

    return startMenu (forceStart)
        .then(p => {
            document.body.removeChild(document.getElementById("landing"))
            return p;
        });
}
