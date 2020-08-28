import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


let WordStatus = 'Entering';
/*
let testObj = {
  Commonly_Misspelled_Words: 'absence, accept, acceptable, accessible, accidentally, accommodate, achieved, acquainted, acquiescence, acquire, acquit, acknowledge, aerial, aggravate, agreeable, all right, alright, a lot, amateur, ambiguous, amendment, analysis, ancillary, apparent, appearance, approximate, argument, arrangement, ascend, atheist, baffled, beginning, benefited, believe, briefly, business, calculator, calendar, category, ceiling, cecemetery, changeable, chaotic, choice, colleagues, collectible, college, commission, commitment, committed, committee, companion, compensate, competitively, completely, concede, conceding, connoisseur, conscience, conscientious, conscious, consistent, convenient, correspondents, counterfeit, courteous, courtesy, criticism, crucial, dabble, debriefing, deceive, decipher, deficient, definite, definitely, description, desirable, deterrent, develop, disappear, disappointed, discipline, discrepancy, dissatisfied, dissertation, drunkenness, eccentric, econoomic, embarrass, embarrassment, emphasise, equipped, equipment, especially, essential, exaggerate, excellent, except, exercise, existence, expenses, extremely, exhilarate, exceed, existence, experience, faithfully, feasible, fiery, foreign, fordfeit, forty, fourth, fulfilled, fulfilment, frivolous, gauge, generally, generalisation, government, grammar, grievance, grateful, guarantee, guardian harrass, height, hierarchy ignorance, immediate, immediate.y immensity, independent, indispensable, inoculate, intelligence, irrational, irrelevant, irreparable, judgement, kindly, knowledge, knowledgeable, leisure, liaise, library, lightning, maitenance, manoeuvre, mathematics, memento, millenium, miniature, minuscule, mischievous, miscellaneous, misspell, mationally, necessary, negotiate, niece, noticeable, occasion, occasionally, occupant, occur, occurred, occurrence, official, omission, omitted, parallel, particularly, parliament, pastime, permanenet, permutation, perserverance, pigeon, possession, precede proferable, preference, preliminary, principal, principle, privilege, procedure, proceed, professor, proprietary, psychology, questionnaire, reasonable, receive, recommend, referred, reference, regrettable, relevant, relief, relieve, religious, repetition, restaurant, ridiculous, rhythm, sacrilegious, sandal schedule, science, scissorrs, secretaries, sensible, separate, separately, seize, similar, sincerely, sovereign, special, stationary, stationery, success, supersede, surprising, tomorrow, transferred, twelfth, twentieth, tyranny, undoubtedly, unnecessary, until, unwritten, vacuum, vicious, visible, weather, weird, withdrawn, withhold',
  Common_Names: 'Alice, Henry, Helen, James, John, Peter, Anna, Robert, Jennifer, Michael, Linda, William, Elizabeth, David,	Barbara, Richard, Susan, Joseph, Jessica',
  English_Alphabet: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z',
  English_Capital_Letters: 'A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
  Greek_Alphabet: 'Α α, Β β, Γ γ, Δ δ, Ε ε, Ζ ζ, Η η, Θ θ, Ι ι, Κ κ, Λ λ, Μ μ, Ν ν, Ξ ξ, Ο ο, Π π, Ρ ρ, Σ σ/ς, Τ τ, Υ υ, Φ φ, Χ χ, Ψ ψ, Ω ω',
  German_Alphabet: 'a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, ß, ä, ö, ü',
};
*/

const Header = (props) => {
  let title = getFormatedTitle(props.title)
  return(
    <div>
      <h1 className="display-4">Shuffle Words App</h1>
      {WordStatus !== 'Entering'? 
      <h4>{title}
      <small onClick={() => props.editIt(props.title) }>edit</small>
      <small onClick={() => props.deleteIt(props.title) }>delete</small>
      </h4>: <div></div> }
      <hr/>
    </div>
  );
}

const Body = (props) => {
  let currentWords;
  let div;

  if (props.obj.title !== '' || undefined){
    let str = props.obj.words[props.obj.title];
    currentWords = splitStr(str);
  }
  
  switch(WordStatus) {
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

class InputWords extends React.Component{
  dict = Object.assign({}, this.props.obj.words);
  state = {
    title: this.props.obj.title === '' ? '': getFormatedTitle(this.props.obj.title),
    content: this.props.obj.title === '' ? '': this.dict[this.props.obj.title],
  };
  
  onchange= (event)=> {
    let value = event.target.value;
    this.setState({ content: value});
  };
  
  onchangeTitle = (event) => {
    let value = event.target.value;
    this.setState({ title: value});
  }

  submitted = () => {
    let content = this.state.content;
    let title = getUnFormatedTitle(this.state.title);
    let dict = Object.assign({}, this.props.obj.words);
    // title is not filled?
    if (title === ''){
        alert("Please Enter A Title!");
        return;
    }
    // content is not filled?
    if (content === ''){
        alert("Please Enter Two or More Words Separated by Commas!");
        return;
    }
    
    // this.props.obj.title present?
    if (this.props.obj.title !== ''){
        delete dict[this.props.obj.title]
        this.props.obj.deleteWords(this.props.obj.title)
    }
    else {
      // title is used?
      if (dict[title] !== undefined){
      
        const titleUsed = window.confirm('This title has already been used! Are you sure you wish to replace the content under this title?');
        if (titleUsed === true){
        }
        else {
            return;
        }
    }
    }
    // enter next page
    dict[title]=content;
    this.props.obj.postWords(title,content)
    this.props.obj.setWords(dict);
    this.props.obj.setTitle(title);
    this.setState({ content: ''});
    this.setState({ title: ''});
    WordStatus = 'Original';
  }

  render(){
    return (
     <div>
        <div className='question'>
            <div>Title :</div>
            <input
            type="text"
            value={this.state.title}
            onChange={this.onchangeTitle}/>
            <div>Input Words (separate them by commas) : </div>
            <textarea 
              type="text"
              value={this.state.content}
              onChange={this.onchange}
            />          
        </div>
         <button className='submit' onClick={this.submitted}>submit</button> 
     </div>
    );
  } 
}

const ShowWords = (props) => {
  let {key,setKey} = props.obj
  let lists = getFormatedArray(props.currentWords);

  const shuffleUp = () => {
    WordStatus = 'Shuffle';
    setKey(key+1);
  }
  
  const enterWords = () => {
    props.obj.setTitle('')
    WordStatus = 'Entering';
    setKey(key+1);
  }
  
  const orderWords = () => {
    WordStatus = 'Order';
    setKey(key+1);
  }

  const originalWords = () => {
    WordStatus = 'Original';
    setKey(key+1);
  }

  let div;
  let array;
  switch(WordStatus) {
    case 'Shuffle':
      array = getRandomArray(props.currentWords);
      lists = getFormatedArray(array);
      div = lists.map(list => <div className="col-lg-3 list">{list.map(word => word)}</div>);
      break;
    case 'Order':
      array = getOrderedArray(props.currentWords);
      lists = getFormatedArray(array);
      div = lists.map(list => <div className="col-lg-3 list">{list.map(word => word)}</div>);
      break;
    default:
      lists = getFormatedArray(props.currentWords);
      div = lists.map(list => <div className="col-lg-3 list">{list.map(word => word)}</div>); 
  }

  return(
    <div>
      <ol>
        <div className="row">
          {div}
        </div>
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

const Footer = (props) => {

  let buttons = [];
  Object.keys(props.words).map(function(key, index){
      buttons.push(<button className='choices' onClick={() => props.changeTitle(key)}>{getFormatedTitle(key)}</button>)
    })
  buttons.reverse()

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

function App() {
  const [title, setTitle] = useState('');
  const [words, setWords] = useState({});
  const [key, setKey] = useState(1);

  useEffect(() => {
    if (Object.keys(words).length === 0){
      getWords()
    }
  })

  //get Object from localhost
  const getWords = async() => {
    const res = await axios.get("http://127.0.0.1:5000/words");
    setWords(res.data)
  }
  //post Object to localhost
  const postWords = async(newTitle,newWords) => {
    const res = await axios.post('http://127.0.0.1:5000/words',`title=${newTitle}&words=${newWords}`)
    console.log(res.data)
  }
  //put Object to localhost
  const putWords = async(oldTitle,newWords) => {
    const res = await axios.put(`http://127.0.0.1:5000/words/${oldTitle}`,`words=${newWords}`)
    console.log(res.data)
  }
  //delete Object from localhost
  const deleteWords = async(oldTitle) => {
    const res = await axios.delete(`http://127.0.0.1:5000/words/${oldTitle}`)
    console.log(res.data)
  }
  
  const obj = {
    setWords,
    words,
    setTitle,
    title,
    setKey,
    key,
    postWords,
    deleteWords,
  };

  const changeTitle = (newTitle) => {
      setTitle(newTitle);
      WordStatus = "Original";
      setKey(key + 1);
  }

  const editIt = (newTitle) => {
      setTitle(newTitle);
      WordStatus = "Entering";
      setKey(key + 1);
  }

  const deleteIt = (oldTitle) => {
    deleteWords(oldTitle);
    let dict = Object.assign({}, words);
    delete dict[oldTitle]
    setWords(dict)
    setTitle('');
    WordStatus = "Entering";
    setKey(key + 1);
}


  return(
      <div className="container" >
        <Header title={title} editIt={editIt} deleteIt={deleteIt}/>
        <Body obj={obj} key={key}/>
        <Footer words={words} changeTitle={changeTitle}/>
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
    if (newTitle.length === 1){
      return title;
    }
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

export default App;
