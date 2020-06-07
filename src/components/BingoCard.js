import React from 'react';
import BingoSquare from './BingoSquare';
// import prompts from './PromptsDatabase';


export default class BingoCard extends React.Component{

    render() {
        
        return(
            <div className="bingo-board">
            {this.props.prompts.map((prompt) => (
                <BingoSquare
                    value={prompt.value}
                    key={prompt.key}
                    answer={prompt.answer}
                />
            ))}
            </div>
        );
    }
}
