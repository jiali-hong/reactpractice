import React from 'react';
import wordsOrder from './wordsOrder'


const ShowWords = (props) => {
    let {key,setKey} = props.obj
  
    const shuffleUp = () => {
      props.obj.setWordStatus('Shuffle');
      setKey(key+1);
    }
    
    const enterWords = () => {
      props.obj.setTitle('')
      props.obj.setWordStatus('Entering');
      setKey(key+1);
    }
    
    const orderWords = () => {
      props.obj.setWordStatus('Order');
      setKey(key+1);
    }
  
    const originalWords = () => {
      props.obj.setWordStatus('Original');
      setKey(key+1);
    }
  
    const getDisplayArray = (array) => {
      let i;
      let a;
      let ret = [];
      let innerList = [];
      for (i=0;i<array.length;i+=4){
        innerList = [];
        for (a=i;a<i+4 && a<array.length;a++){
          innerList.push(<li>{array[a]}</li>)
        }
        ret.push(innerList)
      }
      return ret;
    }
  
    let div;
    let array;
    let lists = getDisplayArray(props.currentWords);
    switch(props.obj.wordStatus) {
      case 'Shuffle':
        array = wordsOrder.getRandomArray(props.currentWords);
        lists = getDisplayArray(array);
        div = lists.map(list => <div className="row">{list.map(word => <div className="col-lg-3 list">{word}</div>)}</div>); 
        break;
      case 'Order':
        array = wordsOrder.getOrderedArray(props.currentWords);
        lists = getDisplayArray(array);
        div = lists.map(list => <div className="row">{list.map(word => <div className="col-lg-3 list">{word}</div>)}</div>); 
        break;
      default:
        lists = getDisplayArray(props.currentWords);
        div = lists.map(list => <div className="row">{list.map(word => <div className="col-lg-3 list">{word}</div>)}</div>); 
    }
  
    return(
      <div>
        <ol>
          {div}
        </ol>
        <div>
          <button onClick={shuffleUp}>Shuffle</button>
          <button onClick={orderWords}>Alphabetize</button>
          <button onClick={originalWords}>Original Order</button>
          <button onClick={enterWords}>Input Other Words</button>
        </div>
      </div>
    );
}

export default ShowWords;