import React, { Component } from 'react'
import Plot from 'react-plotly.js';






class PlotGraph extends Component {

    state = {
        line1: {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            y:this.props.data1,
            name: 'Wins'
        },
        line2: {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            y: this.props.data2,
            name: 'lost'
        },
        layout: {
            datarevision: 0,
        },
        revision: 0,
    }

    
    componentDidMount() {
        
        // console.log(this.props.data1);
        // console.log(this.props.data2);
        // if (this.props.data1.length === 0) {
        //     setTimeout(() => {
        //         this.setState({
        //             line1: {
        //                 x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        //                 y: this.props.data1,
        //                 name: 'Line 1'
        //             },line2: {
        //                 x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
        //                 y: this.props.data2,
        //                 name: 'Line 2'
        //             }
        //         })
        //     }, 3000);
        //     console.log(this.props.data1);
        // }
        console.log(this.props.data1);
        //setInterval(this.increaseGraphic, 200);
    }
    rand = () => parseInt(Math.random() * 10 + this.state.revision, 10);
    increaseGraphic = () => {
        const { line1, line2, layout } = this.state;
        //line1.x.push(this.rand());
        line1.y.push(this.rand());
        if (line1.y.length >= 20) {
            //line1.x.shift();
            line1.y.shift();
        }
        //line2.x.push(this.rand());
        line2.y.push(this.rand());
        if (line2.y.length >= 20) {
            //line2.x.shift();
            line2.y.shift();
        }
        this.setState({ revision: this.state.revision + 1 });
        layout.datarevision = this.state.revision + 1;
    }
    render() {
        return (<div>
            <Plot
                data={[
                    this.state.line1,
                    this.state.line2,
                ]}
                layout={{ width: this.props.width, height: this.props.height, title: "Graph Example" }}
                revision={this.state.revision}
                graphDiv="graph"
            />
            
        </div>);
    }

}

export default PlotGraph
