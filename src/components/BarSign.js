import React, { Component } from 'react'
import _ from 'underscore';

import sign from '../assets/sign-02-02.png';
import BingoCard from './BingoCard';

import prompts from './PromptsDatabase';


export default class BarSign extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: [],
            lit: false,
        } ;
      }

    handleClick(){
        const newPromptsKeys = _.shuffle(_.range(prompts.length)).slice(0,9)
        const newPrompts = _.map(newPromptsKeys, function(val){return prompts[val]})
        this.setState({
            value: newPrompts,
            lit: true   
        })
        // console.log(this.state)
}

    render() {

        return (

            <React.Fragment>

            <div onClick={this.handleClick} className={"bar-sign" + (this.state.lit ? "lit" : "")}>
                <img src={sign} alt="sign" className={"bar-sign" + (this.state.lit ? "lit" : "")}/>              
            </div>
         
            <BingoCard
                prompts= {this.state.value}
            />

            </React.Fragment>
        )
    }
}
