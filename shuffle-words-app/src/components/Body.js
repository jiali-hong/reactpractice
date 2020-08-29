import React from 'react';
import InputWords from './InputWords';
import ShowWords from './ShowWords'

const Body = (props) => {
    let currentWords;
    let div;
    const splitStr = (str) => {
        let words;
        try {
            words = str.split(',');
            words.map(word => words[words.indexOf(word)] = word.trim());
        }
        catch {
            words = []
        }
        return words;
    }
  
    if (props.obj.title !== '' && props.obj.title !== undefined){
      let str = props.obj.words[props.obj.title];
      currentWords = splitStr(str);
    }
    
    switch(props.obj.wordStatus) {
      case 'Entering':
          div = <InputWords obj={props.obj} currentWords={currentWords}/>
          break;
      default:
          div = <ShowWords obj={props.obj} currentWords={currentWords}/>
    }
    
    return (
      <div>
        {div}
        <hr/>
      </div>
    );
    
  }

export default Body;