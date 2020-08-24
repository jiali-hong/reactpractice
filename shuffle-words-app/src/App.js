import React, {useState} from 'react';
import './App.css';


let WordStatus = 'Entering';

const ShowTitle = (props) => {
  let title = getFormatedTitle(props.title)
  return(
    <div>
      <h1 className="display-4">Shuffle Words App</h1>
      {WordStatus !== 'Entering'? <h4>{title}</h4>:<h4> </h4>}
      <hr/>
    </div>
  );
}

let wordsObj = {
  Commonly_Misspelled_Words: 'absence, accept, acceptable, accessible, accidentally, accommodate, achieved, acquainted, acquiescence, acquire, acquit, acknowledge, aerial, aggravate, agreeable, all right, alright, a lot, amateur, ambiguous, amendment, analysis, ancillary, apparent, appearance, approximate, argument, arrangement, ascend, atheist, baffled, beginning, benefited, believe, briefly, business, calculator, calendar, category, ceiling, cecemetery, changeable, chaotic, choice, colleagues, collectible, college, commission, commitment, committed, committee, companion, compensate, competitively, completely, concede, conceding, connoisseur, conscience, conscientious, conscious, consistent, convenient, correspondents, counterfeit, courteous, courtesy, criticism, crucial, dabble, debriefing, deceive, decipher, deficient, definite, definitely, description, desirable, deterrent, develop',
  Common_Names: 'Alice, Henry, Helen, James, John, Peter, Anna, Robert, Jennifer, Michael, Linda, William, Elizabeth, David,	Barbara, Richard, Susan, Joseph, Jessica',
  English_Alphabet: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z',
  English_Capital_Letters: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
  Greek_Alphabet: 'Α α, Β β, Γ γ, Δ δ, Ε ε, Ζ ζ, Η η, Θ θ, Ι ι, Κ κ, Λ λ, Μ μ, Ν ν, Ξ ξ, Ο ο, Π π, Ρ ρ, Σ σ/ς, Τ τ, Υ υ, Φ φ, Χ χ, Ψ ψ, Ω ω',
  German_Alphabet: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, ß, ä, ö, ü',
};

const ChooseWords = (props) => {
  let buttons = [];
  Object.keys(props.words).map(function(key, index){
      buttons.push(<button className='choices' onClick={() => props.onClick(key)}>{getFormatedTitle(key)}</button>)
    })
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

class InputWords extends React.Component{
  state = {
    title: '',
    content: '',
  };

  onchange= (event)=> {
    let value = event.target.value;
    this.setState({ content: value});
    this.props.setValue(value);
  };
  
  onchangeTitle = (event) => {
    let value = event.target.value;
    this.setState({ title: value});
    this.props.setValue(value);
  }

  submitted = () => {
    let str = this.state.content;
    let content = str.split(",");
    content.map(word => content[content.indexOf(word)] = word.trim());
    if (content.length < 2) {
      alert('Please enter 2 or more words and separate each by a comma.');
    }
    else if (this.state.title === ''){
      alert('Please enter a title!')
    }
    else {
      const obj = Object.assign({}, this.props.words);
      obj[getUnFormatedTitle(this.state.title)]=str;
      this.props.setWords(obj);
      this.props.setTitle(getUnFormatedTitle(this.state.title));
      this.setState({ content: ''});
      this.setState({ title: 'New Input'});
      WordStatus = 'Original';
    }
  }

  render(){
    return (
     <div>
        <div className='question'>
          <div className="col-12">
            <div>Title :</div>
          </div>
          <div className="col-12">
            <input
            type="text"
            value={this.state.title}
            onChange={this.onchangeTitle}/>
          </div>
          <div className="col-12">
            <div>Input Words (separate them by commas) : </div>
          </div>
          <div className="col-12">
            <textarea 
              type="text"
              value={this.state.content}
              onChange={this.onchange}
            />          
          </div>
        </div>
         <button className='submit' onClick={this.submitted}>submit</button> 
     </div>
    );
  } 
}

const ShowOriginal = (props) => {
  let words = props.words;
  let {key,setKey} = props.reset
  
  const shuffleUp = () => {
    WordStatus = 'Shuffle';
    setKey(key+1);
  }
  
  const enterWords = () => {
    WordStatus = 'Entering';
    setKey(key+1);
  }
  
  const orderWords = () => {
    WordStatus = 'Order';
    setKey(key+1);
  }

  const lists = getFormatedArray(words);
  return(
    <div>
      <ol>
        <div class="row">
          {lists.map(list => <div className="col-lg-3 list">{list.map(word => word)}</div>)}
        </div>
      </ol>
      <div>
        <button onClick={shuffleUp}>shuffle</button>
        <button onClick={orderWords}>Alphabetize</button>
        <button onClick={enterWords}>Input Again</button>
      </div>
    </div>
  );
}

const ShowShuffled = (props) => {
  let words = props.randomWords(props.words);
  let {key,setKey} = props.reset
  
  const inputOrder = () => {
    WordStatus = 'Original'
    setKey(key+1);
  }
  
  const enterWords = () => {
    WordStatus = 'Entering';
    setKey(key+1);
  }
  
  const shuffleAgain = () => {
    WordStatus = 'Shuffle';
    setKey(key+1);
  }
  
  const orderWords = () => {
    WordStatus = 'Order';
    setKey(key+1);
  }

  const lists = getFormatedArray(words);
  return(
    <div>
      <ol>
        <div class="row">
          {lists.map(list => <div className="col-lg-3 list">{list.map(word => word)}</div>)}
        </div>
      </ol>
      <div>
        <button onClick={shuffleAgain}>Shuffle Again</button>
        <button onClick={orderWords}>Alphabetize</button>
        <button onClick={inputOrder}>back</button>
        <button onClick={enterWords}>Input Again</button>
      </div>
    </div>
  ); 
}

const ShowOrdered = (props) => {
  let words = props.sortWords(props.words);
  let {key,setKey} = props.reset
  
  const inputOrder = () => {
    WordStatus = 'Original'
    setKey(key+1);
  }
  
  const enterWords = () => {
    WordStatus = 'Entering';
    setKey(key+1);
  }
  
  const shuffle = () => {
    WordStatus = 'Shuffle';
    setKey(key+1);
  }
  
  const lists = getFormatedArray(words);

  return(
    <div>
      <ol>
        <div class="row">
          {lists.map(list => <div className="col-lg-3 list">{list.map(word => word)}</div>)}
        </div>
      </ol>
      <div>
        <button onClick={shuffle}>Shuffle</button>
        <button onClick={inputOrder}>back</button>
        <button onClick={enterWords}>Input Again</button>
      </div>
    </div>
  ); 
}

const ShowWords = (props) => {
  let {setValue, val, setWords, setTitle, key, setKey, title} = props.obj;
  

  let list = props.obj.words[title];
  let words = list.split(',');
  words.map(word => words[words.indexOf(word)] = word.trim());

  const randomWords = (w) => {
    const ret = getRandomArray(w);
    return ret;
  }
  
  const sortWords = (w) => {
    const ret = getOrderedArray(w);
    return ret;
  }
  
  const reset = {
    key,
    setKey,
  }
  
  let div;
  switch(WordStatus) {
    case 'Original':
      div = <ShowOriginal words={words} reset={reset} title={title}/>
      break;
    case 'Shuffle':
      div = <ShowShuffled randomWords={randomWords} words={words} reset={reset} title={title}/>
      break;
    case 'Order':
      div = <ShowOrdered sortWords={sortWords} words={words}  reset={reset} title={title}/>
      break;
    default:
      div = <InputWords setValue={setValue} val={val} setWords={setWords} setTitle={setTitle} reset={reset} title={title} words={props.obj.words}/>
  }
  
  return (
    <div>
      {div}
      <hr/>
    </div>
  );
  
}

const getFormatedArray = (words) => {
  let i;
  let e;
  let l;
  let lists = [];
  let wordList = [];
  words.map(word => wordList.push(<li>{word}</li>))
  let len = wordList.length;
  len = Math.ceil(len/4);
  for (i=0;i<wordList.length;i+=len){
    l = [];
    for (e=i;e<i+len;e++){
      l.push(wordList[e]);
    }
    lists.push(l);
  }
  return(lists);
}

const getFormatedTitle = (title) => {
  let newTitle = title.split('_');
  newTitle = newTitle.join(' ');
  return newTitle;
}

const getUnFormatedTitle = (title) => {
  let newTitle = title.split(' ');
  newTitle = newTitle.join('_')
  return newTitle;
}

const getNum = (min, max) => {
    let num = Math.floor(Math.random() * (max - min + 1) ) + min;
    return num;
}

const getRandomArray = (list) => {
  let words = [...list];
  let array = [];
  let len;
  let num;
  while (words.length !== 0){
    len = words.length;
    num = getNum(0,len-1);
    array.push(words[num]);
    words.splice(num, 1);
  }
  return array;
}

const getOrderedArray = (list) => {
  let words = [...list];
  words.sort();
  return words;
}

function App() {
  const [title, setTitle] = useState('Commonly_Misspelled_Words');
  const [val, setValue] = useState('');
  const [words, setWords] = useState(wordsObj);
  const [key, setKey] = useState(1);

  const setNewWords = (newKey) => {
    setTitle(newKey);
    WordStatus = 'Original';
    setKey(key + 1);
  }
  
  const obj = {
    setValue,
    val,
    setWords,
    words,
    setTitle,
    title,
    setKey,
    key,
  };
  
  return(
      <div className='body container'>
        <ShowTitle title={title}/>
        <ShowWords obj={obj} key={key}/>
        <ChooseWords onClick={setNewWords} words={words}/>
      </div>
  );
}

export default App;
