let WordStatus = 'Entering';

const MkTitle = (props) => {
  return(
    <div>
      <h1>{props.title}</h1>
    </div>
  );
}

const ArrayOfWords = [
'Commonly Misspelled Words:absence, accept, acceptable, accessible, accidentally, accommodate, achieved, acquainted, acquiescence, acquire, acquit, acknowledge, aerial, aggravate, agreeable, all right, alright, a lot, amateur, ambiguous, amendment, analysis, ancillary, apparent, appearance, approximate, argument, arrangement, ascend, atheist, baffled, beginning, benefited, believe, briefly, business, calculator, calendar, category, ceiling, cemetery, changeable, chaotic, choice, colleagues, collectible, college, commission, commitment, committed',
'Common Names:Alice, Henry, Helen, James, John, Peter, Anna, Robert, Jennifer, Michael, Linda, William, Elizabeth, David,	Barbara, Richard, Susan, Joseph, Jessica',
'English Alphabet:a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z',
'English Capital Letters:A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z',
'Greek Alphabet:Α α, Β β, Γ γ, Δ δ, Ε ε, Ζ ζ, Η η, Θ θ, Ι ι, Κ κ, Λ λ, Μ μ, Ν ν, Ξ ξ, Ο ο, Π π, Ρ ρ, Σ σ/ς, Τ τ, Υ υ, Φ φ, Χ χ, Ψ ψ, Ω ω',
'German Alphabet:a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, ß, ä, ö, ü'
]

const ChooseWords = (props) => {
  // console.log('inChooseWords()');
  return(
    <div>
      {ArrayOfWords.map(x =><button className='choices' onClick={() => props.onClick(x)}>
                          {x.split(":")[0]}</button>)}
    </div>
  )
}

class InputWords extends React.Component{
  state = {content: ''};

  onchange= (event)=> {
    let value = event.target.value;
    this.setState({ content: value});
    this.props.setValue(value);
    
  };
  
  submitted = () => {
    let content = this.state.content;
    content = content.split(",");
    content.map(word => content[content.indexOf(word)] = word.trim())
    if (content.length < 2) {
      alert('Please enter 2 or more words and separate each by a comma.');
    }else {
      this.props.setWords(content);
      this.setState({ content: ''});
      WordStatus = 'Active';
    }
  }

    render(){
    this.props.setTitle('Shuffle Words App');
   return (
     <div>
       <div>
            Input your Words (separate the words by commas, please): 
        </div>
         <div className='question'>
           <textarea 
            type="text"
            value={this.state.content}
            onChange={this.onchange}
          />
         </div>
         <button className='submit' onClick={this.submitted}>
            <submit>submit</submit>
          </button>
         
     </div>
   );
  } 
}

const getNum = (min, max) => {
    let num = Math.floor(Math.random() * (max - min + 1) ) + min;
    return num;
}

const getRandomArray = (list) => {
  let words = [...list];
  // console.log('words: ',words);
  let array = [];
  let i;
  let len;
  let num;
  while (words.length !== 0){
    len = words.length;
    num = getNum(0,len-1);
    array.push(words[num]);
    words.splice(num, 1);
  }
  // console.log('words2: ', words);
  // console.log('array: ', array);
  return array;
}

const getOrderedArray = (words) => {
  // console.log(words);
  let list = [...words];
  list.sort();
  return list;
}

const ShowWords = (props) => {
  // console.log('in ShowWords()')
  let words = props.words;
  
  const shuffleUp = () => {
    WordStatus = 'Shuffle';
    CallDom();
  }
  
  const enterWords = () => {
    WordStatus = 'Entering';
    CallDom();
  }
  
  const orderWords = () => {
    WordStatus = 'Order';
    CallDom();
  }

  return(
    <div>
      <ol>
         {words.map(x => <li>{x}</li>)}
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
  // console.log('in ShowShuffled()')
  let words = props.randomWords(props.words);
  
  const inputOrder = () => {
    WordStatus = 'Active'
    CallDom()
  }
  
  const enterWords = () => {
    WordStatus = 'Entering';
    CallDom();
  }
  
  const shuffleAgain = () => {
    WordStatus = 'Shuffle';
    CallDom();
  }
  
  const orderWords = () => {
    WordStatus = 'Order';
    CallDom();
  }
  
  // console.log(words)
  return(
    <div>
      <ol>
         {words.map(x => <li>{x}</li>)}
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
  
  const inputOrder = () => {
    WordStatus = 'Active'
    CallDom()
  }
  
  const enterWords = () => {
    WordStatus = 'Entering';
    CallDom();
  }
  
  const shuffle = () => {
    WordStatus = 'Shuffle';
    CallDom();
  }

  return(
    <div>
      <ol>
         {words.map(x => <li>{x}</li>)}
      </ol>
      <div>
        <button onClick={shuffle}>Shuffle</button>
        <button onClick={inputOrder}>back</button>
        <button onClick={enterWords}>Input Again</button>
      </div>
    </div>
  ); 
}

const App = () => {
  // console.log('in App()')
  const [val, setValue] = useState('')
  const [words, setWords] = useState('')
  const [title, setTitle] = useState('Shuffle Words App')
  
  const randomWords = (w) => {
    const ret = getRandomArray(w);
    return ret;
  }
  
  const sortWords = (w) => {
    const ret = getOrderedArray(w);
    return ret;
  }
  
  const onclick = (str) => {
    let newTitle = str.split(":")[0];
    let list = str.split(":")[1];
    let words = list.split(",");
    words.map(word => words[words.indexOf(word)] = word.trim())
    // console.log(words)
    setTitle(newTitle);
    setWords(words);
    WordStatus = 'Active';
    CallDom();
  }
  
  return(
      <div>
        <MkTitle title={title}/>
        <hr/>
        {WordStatus == 'Entering'?
        (<InputWords setValue={setValue} val={val} setWords={setWords} setTitle={setTitle}/>):
        (WordStatus == 'Active'?
         (<ShowWords words={words}/>):
        (WordStatus == 'Shuffle'?
         (<ShowShuffled randomWords={randomWords} words={words}/>):(<ShowOrdered sortWords={sortWords} words={words} />)))
        }
        <hr/>
        <h2>Common Choices</h2>
        <hr/>
        <ChooseWords onClick={onclick}/>
      </div>
  );
}

const CallDom = () => {
  ReactDOM.render(
     <App />,
    document.getElementById('mountNode'),
  );
}
CallDom();