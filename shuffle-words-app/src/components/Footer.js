import React from 'react';
import titleFormat from './titleFormat'

const Footer = (props) => {

    let buttons = [];
    Object.keys(props.words).map(key => buttons.push(<button className='choices' onClick={() => props.changeTitle(key)}>{titleFormat.getFormatedTitle(key)}</button>));
    buttons.reverse();
  
    return(
      <div>
        <h2>Common Choices</h2>
        <hr/>
        <div>
          {buttons.map(button => button)}
        </div>
      </div>
    )
  }

export default Footer;