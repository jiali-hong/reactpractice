import React,{useState, useEffect} from 'react';
import {Container,Row,Col,Button,ButtonGroup,ToggleButton} from 'react-bootstrap';
import getRandomFormula from './maths'

class Body extends React.Component{
    state = { answer: '' };
    
    onchange = (event) => {
        this.setState({ answer: event.target.value })
        if (this.props.obj.answer === parseInt(event.target.value,10)) {
            this.props.obj.setScore(this.props.obj.score+1);
            this.setState({ answer: '' });
            let {problem, ans} = this.props.obj.getRandomFormula()
            this.props.obj.setFormula(problem)
            this.props.obj.setAnswer(ans)
        }
    }

    render() {
        return(
        <div className='AnswerArea'>
            <div>{this.props.obj.formula}=</div>
            <input
                className="Answer"
                value={this.state.answer}
                onChange={this.onchange}
                />
            
        </div>  
        );
    }
}

const PlayAgain = props => (
	<div className="PlayGame">
      {props.Name !== 'Start' ?  <h2>Your Score: {props.score}</h2>:<h2>Maths Game!</h2>}
      <Button onClick={props.onClick} variant={props.theme !== 'dark' ? "outline-dark": "outline-light"}>{props.Name}</Button>
	</div>
);

const Game = props => {
    const {ans, problem} = getRandomFormula()
    const {theme, setTheme} = props;
    const [score, setScore] = useState(0);
    const [formula, setFormula] = useState(problem);
    const [answer, setAnswer] = useState(ans);
    const [secondsLeft, setSecondsLeft] = useState(10)
    

    useEffect (() => {
        if (secondsLeft > 0 && props.gameKey > 0) {
            const timerId = setTimeout(() => setSecondsLeft(secondsLeft - 1), 1000);
            return () => clearTimeout(timerId);
          }
    })

    const obj = {
        formula,
        setFormula,
        score,
        setScore,
        answer,
        setAnswer,
        getRandomFormula,
    }
    const gameStatus = props.gameKey === 0 ? 'start' : secondsLeft === 0 ? 'stop' : 'active';
    
    return(
        <div className={theme !== 'dark' ? 'LIGHT': 'DARK'}>
            <Container>
                <h1 className="Title">KvCalc</h1>
                <Row>
                    <Col><div className="score">score: {score}</div></Col>
                    <Col><div className="timer">{secondsLeft}</div> </Col>
                </Row>
                <Row>
                    <Col>
                    {gameStatus === 'active' ? (
                        <Body obj={obj}/>) : (
                        <PlayAgain onClick={props.startNewGame} Name={props.gameKey===0 ? 'Start':'Play Again'} theme={theme} score={score}/>   
                    )}
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col>
                        <ThemeChanger setTheme={setTheme} theme={theme}/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const ThemeChanger = props => {
    const radios = ['light','dark'];

    return (
        <div className="themeChanger">
            <ButtonGroup toggle >
                {radios.map((radio,idx) => 
                <ToggleButton
                    type="radio"
                    key={idx}
                    checked={props.theme === radio}
                    variant={props.theme !== 'dark' ? "outline-dark": "outline-light"}
                    onClick={() => {
                        props.setTheme(radio);
                        document.getElementById('HTML').className = radio !== 'dark' ? 'LIGHT': 'DARK';
                    }}
                > {radio} </ToggleButton>
                )}
            </ButtonGroup>
        </div>
    )
}

export default Game;