import React from 'react';
import {Container,Table} from 'react-bootstrap';

const ViewScores = (props) => {
    let currentUser = localStorage.getItem('currentUser')
    const showScores = () => {
        if (currentUser !== null && ''){
            return;
        }
        let scores = JSON.parse(localStorage.getItem(localStorage.getItem('currentUser'))),
            scoresArray = Object.keys(scores),
            array = [];
        scoresArray.map(date => array.push(date + ': ' + scores[date]))
        array.sort()
        array.reverse()
        return array;
    }
    return (
        <div className={localStorage.getItem('theme').toUpperCase()}>
            <Container>
                <h1 className="Title">Scores</h1>
                {currentUser === null || currentUser === ''? 
                    <div>Please login first!</div>
                    :
                    <div>
                        <Table striped hover variant={localStorage.getItem('theme')}>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>date</th>
                                    <th>score</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showScores().map(score => 
                                <tr>
                                    <td>{showScores().indexOf(score)+1}</td>
                                    <td>{score.split(": ")[0]}</td>
                                    <td>{score.split(": ")[1]}</td>
                                </tr>)}
                            </tbody>
                        </Table>
                        
                    </div>
                    
                }
            </Container>
        </div>
    )
}

export default ViewScores;