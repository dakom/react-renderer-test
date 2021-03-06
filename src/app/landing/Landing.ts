import {startMenu} from "./menu/Menu";

export const startLanding = (forceStart?) => {
    const descElement = document.getElementById("desc");

    descElement.innerHTML = 
    `
    Choose any of the above options to start the test, and refresh the page to come back here.
    <br/>Click/hold on the canvas to add bunnies (lots of bunnies!)
<p/>
    Performance results are roughly:
    <p/>
    <ul style="list-style: decimal">
        <li>Baseline-Pixi >== React-Pixi-Custom-Cheat</li>
        <li>React-Empty-Null === React-Pixi-Dom</li>
        <li>React-Empty-Edges === React-Pixi-Custom</li>
    </ul>
<p/>
Note that the "cheat" option is not so relevant to this test as a whole, yet it does demonstrate an important technique for real-world optimization. Lots of props is fine even when lots of nodes isn't.<br/>
<p/>In other words, <i>when having lots of nodes (which "cheat" ignores)</i>, bottleneck issues are in order of importance:
<p/>
<ul style="list-style: decimal">
<li>React vs. straight/imperative (big difference)</li>
<li>Rendering null at the edges vs. rendering final elements (very significant difference)</li>
<li>Leveraging ReactDOM vs. custom renderer (negligible difference)</li>
</ul>
<p/>This is rather surprising, since one would think a custom renderer would make a larger difference.
  <p/>
Of course a custom renderer is still awesome for enabling a clearer architecture, it just isn't a performance gain.
    <p/>Source is available at <a href="https://github.com/dakom/react-renderer-test">https://github.com/dakom/react-renderer-test</a>
    <p/>Pixi-Custom source is at <a href="https://github.com/dakom/react-pixi-renderer">https://github.com/dakom/react-pixi-renderer</a>
<hr/>
    <h2>Baseline-Pixi</h2>
    <p/>
    Non-React. Imperative straight PIXI code.

    <h2>React-Empty-Edges</h2>
    <p/>
    Custom renderer with empty nodes (simple featureless js objects)
    <br/>This version renders out the final edges (as empty objects)
    
    <h2>React-Empty-Null</h2>
    <p/>
    Custom renderer with empty nodes (simple featureless js objects)
    <br/>This version renders null at the final edges

    <h2>React-Pixi-Custom</h2> 
    <p/>
    A custom React renderer using native PIXI classes.
    <br/>Renders elements all the way down, and elements are PIXI objects
    
    <h2>React-Pixi-Dom</h2>
    <p/>
    Using standard ReactDOM by via Higher Order Components
    <br/>Renders null at the edges
    
    <h2>React-Pixi-Custom-Cheat</h2> 
    <p/>
    Like React-Pixi-Custom but doesn't create a new node for each bunny
    <br/>Rather, the bunnies are only set as props
    `

    return startMenu (forceStart)
        .then(p => {
            document.body.removeChild(document.getElementById("landing"))
            return p;
        });
}
