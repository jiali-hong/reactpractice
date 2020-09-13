import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import getDate from './utils/getDate'
import { Redirect } from 'react-router-dom';

const PlayAgain = props => {
    const [redirect, setRedirect] = useState(false)
    let currentUser = localStorage.getItem('currentUser')
    const saveRecord = () => {
        let scores = JSON.parse(localStorage.getItem(localStorage.getItem('currentUser')))
        let time = parseInt(localStorage.getItem('time'))
        let score = props.score
        scores[getDate()] = score + ' in ' + time + ' seconds'
        localStorage.setItem(localStorage.getItem('currentUser'),JSON.stringify(scores))
    }
    const startGame = () => {
        return currentUser !== null && currentUser !== ''
            ? props.onClick
            : () => {setRedirect(true)}
    }
    if (props.gameStatus === 'stop'){
       saveRecord() 
    }
	return (
        <div className="PlayGame">
            {redirect && <Redirect to="/login"/>}
            {props.Name !== 'Start' ? 
            <h2>Your Score: {props.score}</h2>:<h2>Maths Game!</h2>}
            <Button onClick={startGame()} variant={localStorage.getItem('theme') !== 'dark' ? "outline-dark": "outline-light"}>{props.Name}</Button>
        </div>
    )
}



export default PlayAgain;