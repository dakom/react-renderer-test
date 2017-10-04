import * as React from 'react';

import { IoDynamics } from '../../io/IoDynamics';
import { WorldState } from '../../world/World-State';
import { GetInitialWorldState } from '../../world/World-State';
import { UpdateWorld } from '../../world/World-Updater';
import { getNow } from '../Time';


interface IoState {
    worldState: WorldState;
}

//Grabs all current Input/Output values and passes them down on frame ticks (if not busy with a previous render)
//A WorldUpdater must be supplied and checked all the way here at the top - otherwise the renderer has no way of knowing when its finished
//It's written as a Higher Order Component so it can wrap around a React View
export const getIoRoot = onResize => isTouching => onRender => WorldView =>
    class extends React.PureComponent<any, IoState> {
        private renderCompleted: boolean = false;
        private dynamics: IoDynamics;
        private firstUpdate: boolean = true;
        private firstRepaint: boolean = true;
        private firstRender: boolean = true;

        constructor(props) {
            super(props);

            this.dynamics = {
                isTouching: false,
            }

            this.state = {
                worldState: GetInitialWorldState()
            };

            this.updateSize = this.updateSize.bind(this);
            this.repaint = this.repaint.bind(this);
        }

        /* Lifecycle */
        componentDidMount() {
            //Time
            const renderFrame = (frameNow) => {
                if (this.renderCompleted) {
                    const now = getNow(frameNow);
                    this.renderCompleted = false;

                    this.dynamics.deltaTime = this.dynamics.tick ? now - this.dynamics.tick : 0;
                    this.dynamics.tick = now;
                    this.dynamics.isTouching = isTouching();

                    //merge io dynamics into old world
                    const worldState = Object.assign({}, {
                        ioDynamics: this.dynamics
                    }, this.state.worldState);

                    
                    //update world
                    UpdateWorld(worldState)
                        .then(newWorld => {
                            this.setState({
                                worldState: newWorld
                            });
                        })

                }
                requestAnimationFrame(renderFrame);
            }
            requestAnimationFrame(renderFrame);

            //Display
            window.onresize = evt => this.updateSize();
            this.updateSize();

            console.log("did mount!");

            //initial paint
            this.repaint("mount");
        }

        componentDidUpdate() {
            if (this.firstUpdate) {
                console.log(`first update!`);
                this.firstUpdate = false;
            }
            this.repaint("update");
        }

        /* Utilities */

        repaint(source?: string) {
            if (this.firstRepaint) {
                console.log(`first repaint! [via ${source}]`);
                this.firstRepaint = false;
            }
            this.renderCompleted = true;
            onRender();
        }

        updateSize() {
            this.dynamics.stageWidth = window.innerWidth;
            this.dynamics.stageHeight = window.innerHeight;

            onResize();

            
        }

        /* Render tree */
        render() {
            if (this.firstRender) {
                console.log("first render!");
                this.firstRender = false;
            }

            return <WorldView {...this.state.worldState} {...this.props} />
        }
    }