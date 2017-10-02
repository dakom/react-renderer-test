
import * as React from 'react';
import * as PIXI from "pixi.js";
import {Container} from "../pixi/Container";
import {withPixi} from "../pixi/PIXI";
import {Bunny, BunnyMeta} from "./Bunny";
import {UpdateMovement} from "./BunnyMovement";
import {Stats} from "../stats/Stats";

type BunniesProps = Partial<{
    deltaTime:number;
    isTouching:boolean;
    parent:PIXI.Container;
    texture:PIXI.Texture;
    stageWidth:number;
    stageHeight:number;
}>

interface BunniesState {
    bunnies:Array<BunnyMeta>;
}

export class Bunnies extends React.PureComponent<any,BunniesState> {
    constructor(props:BunniesProps) {
        super(props);
        
        this.state = {
            bunnies: MakeBunnies(2)
        }
    }

    componentWillReceiveProps(nextProps:BunniesProps) {
        const bounds = new PIXI.Rectangle(0,0,nextProps.stageWidth, nextProps.stageHeight);

        const bunnies = UpdateMovement((!nextProps.isTouching) ? this.state.bunnies : this.state.bunnies.concat(MakeBunnies()), nextProps.deltaTime, bounds);

        this.setState({
            bunnies: bunnies
        });
    }

    render() {
        return  (
            <Container parent={this.props.parent}>
                <Container>
                {
                    this.state.bunnies.map(
                        (bunny, index) => 
                            <Bunny key={index} texture={this.props.texture} {...bunny} />)
                }
                </Container>
                <Container>
                    <Stats deltaTime={this.props.deltaTime} amount={this.state.bunnies.length}/>
                </Container>
            </Container>
        )
    }
}

export const MakeBunnies = (amount:number = 100):Array<BunnyMeta> => {
    const bunnies = new Array<BunnyMeta>(amount);

    for(let idx = 0; idx < amount; idx++) {
        bunnies[idx] = {
            origin: {
                x: 0,
                y: 0
            },
            direction: {
                x: Math.random() * 10,
                y: (Math.random() * 10) - 5
            }
        };
    }

    return bunnies;
}
