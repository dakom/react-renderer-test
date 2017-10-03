
import * as React from 'react';
import * as PIXI from "pixi.js";

interface ContainerProps{
    onCreated:(container:PIXI.Container) => void;
}

export class Container extends React.PureComponent<ContainerProps,any> {
    private _container:PIXI.Container;

    constructor(props) {
        super(props);
        

        this._container = new PIXI.Container();
    }

    componentDidMount() {
        this.props.onCreated(this._container);
    }
    render () {
        return this.props.children;
    }
}