import React,{useState} from 'react';
import {Button} from 'react-bootstrap';
import getDate from './getDate'
import { Redirect } from 'react-router-dom';

const PlayAgain = props => {
    const [redirect, setRedirect] = useState(false)
    let currentUser = localStorage.getItem('currentUser')
    const saveRecord = () => {
        let scores = JSON.parse(localStorage.getItem(localStorage.getItem('currentUser')))
        scores[getDate()] = props.score
        localStorage.setItem(localStorage.getItem('currentUser'),JSON.stringify(scores))
    }
    if (props.gameStatus === 'stop'){
       saveRecord() 
    }
	return (
        <div className="PlayGame">
            {redirect && <Redirect to="/login"/>}
            {props.Name !== 'Start' ? 
            <h2>Your Score: {props.score}</h2>:<h2>Maths Game!</h2>}
            <Button onClick={currentUser !== null && currentUser !== ''? props.onClick:() => {setRedirect(true)}} variant={props.theme !== 'dark' ? "outline-dark": "outline-light"}>{props.Name}</Button>
        </div>
    )
}



export default PlayAgain;