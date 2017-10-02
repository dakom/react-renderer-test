
import * as React from 'react';
import * as PIXI from "pixi.js";
import {withRenderer, RenderProps} from "./Renderer";
import {withInput, InputState} from "./Input";
import {Bunnies} from "../components/bunnies/Bunnies";
import {LoadTextures} from "../assets/Loader";
import {Text} from "../components/pixi/Text";
import {Container} from "../components/pixi/Container";

export type MainProps = RenderProps & InputState;

interface MainState {
    bunnyTexture:PIXI.Texture;
}

class MainView extends React.PureComponent<MainProps,MainState> {
    constructor(props:MainProps) {
        super(props);

        LoadTextures().then(texture => 
            this.setState({
                bunnyTexture: texture
            })
        )
    }
    
    render() {
        return (
            <Container parent={this.props.app.stage}>
                {(!this.state)
                    ?   <Text text="Loading textures..." style={{fill: 0xFF00FF}} />
                    :   <Bunnies texture={this.state.bunnyTexture} {...this.props} />
                }
            </Container>
        )
    }
}

export const Main = withRenderer(withInput(MainView));
