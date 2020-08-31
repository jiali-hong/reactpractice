import React from 'react';
import {Container} from 'react-bootstrap';
// import getDate from './getDate'

const ViewScores = (props) => {
    const showScores = () => {
        let l = [],
            i = 0,
            KEY = localStorage.key(i),
            array = [];
        while ( KEY !== null || undefined){
            KEY = localStorage.key(i)
            l.push(KEY + ': ' + localStorage.getItem(KEY));
            i++;
        }
        l.sort();
        i = 0;
        while (parseInt(l[i][0])){
            array.push(l[i]);
            i++;
        }
        return array;
        
    }
    return (
        <div className={props.theme !== 'dark'? 'LIGHT': 'DARK'}>
            <Container>
                <h1 className="Title">Scores</h1>
                <div>
                    {showScores().map(score => <p>{score}</p>)}
                </div>
            </Container>
        </div>
    )
}

export default ViewScores;