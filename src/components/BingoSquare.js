import React, { Component } from 'react'

export default class BingoSquare extends Component {

    constructor(props) {
        super(props);
        this.crossOff = this.crossOff.bind(this);
        this.state = {
            done: false,
            display: this.props.value,
            answer: this.props.answer,
            question: this.props.value
        } ;
    }

    crossOff(){
        this.setState({ done: !this.state.done })
        this.setState({ display: this.state.answer})
        console.log(this.state.display)
    }

    render() {
        return (
            <div className={"bingo-square" + (this.state.done ? "done" : "")} 
                key={prompt.key} 
                onClick={this.crossOff} >
                
                <p className="bingo-text">{this.state.display}</p>
            </div>
        )
    }
}
