import * as React from "react";
import {Text} from "react-pixi-renderer";


export class Status extends React.Component<any, any> {
    private textWidth:number;
   
    componentDidMount() {
        this.setState({
            textWidth: this.textWidth
        })
    }

    render() {
        return <Text 
            onAdded={(pixiText:PIXI.Text) => this.textWidth = pixiText.width}
            x={!this.state ? 0 : this.props.stageWidth - this.state.textWidth}
            text={this.props.text} 
            style={{fill: 0xFF00FF}}
        />
    }
}

