import React from 'react';
import titleFormat from './titleFormat'

const Header = (props) => {
    let title = titleFormat.getFormatedTitle(props.title)
    return(
      <div>
        <h1 className="display-4">Shuffle Words App</h1>
        {
        props.wordStatus !== 'Entering'? 
        <h4>{title}
        <small onClick={() => props.editIt(props.title) }>edit</small>
        <small onClick={() => props.deleteIt(props.title) }>delete</small>
        </h4>
        :
        <div></div>
        }
        <hr/>
      </div>
    );
  }


export default Header;