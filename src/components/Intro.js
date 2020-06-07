import React, { Component } from 'react';
import beerClink from '../assets/favicon-16x16.png';

export default class Intro extends Component {

    constructor(props) {
        super(props);
        this.state = { visible: true } ;
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose = () => {
        this.setState({ visible: !this.state.visible })
        // console.log(this.state.visible)
    }

    render() {
        return (
            <div  className={'modalDialog' + (this.state.visible ? "" : "invisible")} >
                <div className="modal-content"> 
                    <div className="modal-header">
                            ABOUT THIS GAME
                    </div>

                    <div className="modal-text">
                    It's (almost) our very own Annie Calef's birthday!! Due to forces out of our control (thanks, covid), 
                    we're celebrating in a socially distant way this year.
                    <br>
                    </br>
                    <br>
                    </br> 
                    This little bingo game is designed to keep the adult beverages flowing (feel free to define "adult" as you prefer).
                    The rules are simple. We each read a prompt to Annie and she must answer the question. 
                    <br>
                    </br>
                    <br>
                    </br> 
                    If she gets it right, she drinks and we all flip the square. If she gets it wrong, everyone drinks anyway. 
                    First one to a bingo must (obviously) first yell BINGO and then takes a drink (shot?) with Annie.
                    </div>

                    <div className="modal-footer" onClick = {this.handleClose} >
                        <img src={beerClink} alt="beer" className="beer-icon"/>
                        Yes, I am ready to PARTY.
                    </div>

                </div>
            </div>
        )
    }
}
