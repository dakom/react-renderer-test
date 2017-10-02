
import * as React from 'react';
import * as PIXI from "pixi.js";

interface RenderState {
    tick:number;
    deltaTime:number;
}

export interface RenderProps extends RenderState {
    app:PIXI.Application;
    stageWidth:number;
    stageHeight:number;
}

export const withRenderer = WrappedComponent =>
    class extends React.PureComponent<RenderProps,RenderState> {
        private renderCompleted: boolean = true;
        private canvas: HTMLCanvasElement;
        private app:PIXI.Application;
        private stageWidth:number;
        private stageHeight:number;

        updateSize() {
            this.stageWidth = window.innerWidth;
            this.stageHeight = window.innerHeight;
            this.canvas.setAttribute('width', window.innerWidth.toString());
            this.canvas.setAttribute('height', window.innerHeight.toString());

            if(this.app) {
                this.app.renderer.resize(this.stageWidth,this.stageHeight);
            }
        }
        
        componentDidMount() {
           
            this.updateSize();

            this.app = new PIXI.Application({
                width: this.stageWidth, 
                height: this.stageHeight, 
                backgroundColor: 0x2a2a2a,
                view: this.canvas,
                autoStart: false,
                });

            
            const renderFrame = (frameNow) => {
                if (this.renderCompleted) {
                    this.renderCompleted = false;

                    this.setState({
                        tick: frameNow,
                        deltaTime: this.state ? frameNow - this.state.tick : 0
                    });
                } else {
                    //console.error("skipping frame! This shouldn't ever happen!!");
                }
                requestAnimationFrame(renderFrame);
            }
            requestAnimationFrame(renderFrame);

            window.onresize = evt => this.updateSize();
        }

        componentDidUpdate() {
            this.app.render();
            this.renderCompleted = true;
        }

        render() {
            return (
                <canvas ref={canvas => this.canvas = canvas}>
                {this.app &&
                    <WrappedComponent app={this.app} stageWidth={this.stageWidth} stageHeight={this.stageHeight} {...this.props} {...this.state} />
                }
                </canvas>
            )
        }
    }