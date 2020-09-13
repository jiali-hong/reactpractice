import {ButtonGroup,ToggleButton} from 'react-bootstrap';
import React from 'react';

const SetTimer = props => {
    const radios = ['300','450','600'];

    return (
        <div>
            <ButtonGroup toggle >
                {radios.map((radio,idx) => 
                <ToggleButton
                    type="radio"
                    key={idx}
                    checked={localStorage.getItem('time') === radio}
                    variant="outline-dark"
                    onClick={() => {
                        localStorage.setItem('time',radio)
                        props.refreshThis()
                    }}
                > {radio} </ToggleButton>
                )}
            </ButtonGroup>
        </div>
    )
}


export default SetTimer;