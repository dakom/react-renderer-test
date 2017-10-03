import * as PIXI from 'pixi.js';
import * as React from 'react';

import { getStatus } from '../../../../strings/StatusStrings';
import { WorldState } from '../../../../world/World-State';
import { Container } from '../helpers/Container';
import { Status } from './Status-View';
import { Bunnies } from './Bunnies-View';

interface WorldViewProps extends WorldState {
    app: PIXI.Application;
}

interface WorldViewState {
    container?: PIXI.Container;
}

export const WorldView = app =>
    class extends React.PureComponent<WorldViewProps, WorldViewState> {
        constructor(props: WorldViewProps) {
            super(props);

            
            this.state = {}
            this.start = this.start.bind(this);
        }

        start(container: PIXI.Container) {
            console.log("added container!");
            app.stage.addChild(container);
            this.setState({
                container: container
            })
        }
        render() {
            const isReady = (this.state.container && this.props.texture) ? true : false;

            //console.log(this.props);
            return (
                <Container onCreated={this.start}>
                    {isReady &&
                        <Bunnies container={this.state.container} texture={this.props.texture} bunnies={this.props.bunnies} />
                    }
                    {isReady &&
                        <Status text={getStatus(this.props)} container={this.state.container} stageWidth={this.props.ioDynamics.stageWidth} />
                    }
                </Container>
            )
        }
    }
