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
                    checked={localStorage.getItem('theme') === radio}
                    variant="outline-dark"
                    onClick={() => {
                        localStorage.setItem('theme',radio)
                        props.refresh()
                        props.refreshNav()
                        document.getElementById('HTML').className = localStorage.getItem('theme').toUpperCase();   
                    }}
                > {radio} </ToggleButton>
                )}
            </ButtonGroup>
        </div>
    )
}


export default ThemeChanger;