import React, { Component } from 'react';
import * as d3 from 'd3';
import { FormattedMessage } from 'react-intl';

class Grafica extends Component {
    
    constructor() {
        super();

        this.width = 700;
        this.height = 500;
        this.margin =  { top:10, left:70, bottom: 40, right: 10 };
        this.state = {
            x: undefined,
            y: undefined,
            iwidth: this.width - this.margin.left - this.margin.right,
            iheight: this.height - this.margin.top - this.margin.bottom
        };
    }

    componentDidMount() {
        this.drawChart(this.props.data);
    }

    getMax(data) {
        let array = [];
        data.forEach( i => array.push(i.views));
        return Math.max(...array);
    }

    drawChart(data) {
        const canvas = d3.select(this.refs.canvas);
        
        const svg = canvas.append("svg");
        svg.attr("width", this.width);
        svg.attr("height", this.height);
        
        let g = svg.append("g").attr("transform", `translate(${this.margin.left},${this.margin.top})`);
        
        const y = d3.scaleLinear() 
            .domain([0, this.getMax(data)])
            .range([this.state.iheight, 0]);

        const x = d3.scaleBand()
            .domain(data.map(d => d.id) ) 
            .range([0, this.state.iwidth])
            .padding(0.1); 

        const bars = g.selectAll("rect").data(data);
        
        bars.enter().append("rect")
            .attr("class", "bar")
            .style("fill", "steelblue")
            .attr("x", d => x(d.id))
            .attr("y", d => y(d.views))
            .attr("height", d => this.state.iheight - y(d.views))
            .attr("width", x.bandwidth()); 

        g.append("g")
            .classed("x--axis", true)
            .call(d3.axisBottom(x))
            .attr("transform", `translate(0, ${this.state.iheight})`);  

        g.append("g")
            .classed("y--axis", true)
            .call(d3.axisLeft(y));
    }

    render() { 
        return (
            <div className="mt-3 d-flex flex-column justify-content-center align-items-center">
                <h2><FormattedMessage id="Title" /></h2>
                <div ref="canvas"></div>
            </div>
        );
    }
}
 
export default Grafica;