import {ButtonGroup,ToggleButton} from 'react-bootstrap';
import React from 'react';

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
                        localStorage.setItem('theme',radio)
                    }}
                > {radio} </ToggleButton>
                )}
            </ButtonGroup>
        </div>
    )
}


export default ThemeChanger;