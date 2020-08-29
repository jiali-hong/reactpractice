import {useState} from 'react';
import restfulMethods from './restfulMethods'

const useAppStates = () => {
    const [title, setTitle] = useState('');
    const [words, setWords] = useState({});
    const [key, setKey] = useState(1);
    const [wordStatus, setWordStatus] = useState('Entering');
    
    const setWordsfunc = async() => {
      let ret = await restfulMethods.getWords();
      if (Object.keys(words).length === 0){
        setWords(ret);
      }
    }
    setWordsfunc();

    return {
      title,
      setTitle,
      words,
      setWords,
      key,
      setKey,
      wordStatus,
      setWordStatus,
    };
  }

export default useAppStates;