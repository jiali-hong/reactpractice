import axios from 'axios';

const restfulMethods = {
  //get Object from localhost
  getWords: async() => {
    const res = await axios.get("http://127.0.0.1:5000/words");
    return res.data;
  },
  //post Object to localhost
  postWords: async(newTitle,newWords) => {
    const res = await axios.post('http://127.0.0.1:5000/words',`title=${newTitle}&words=${newWords}`)
    console.log(res.data)
  },
  //put Object to localhost
  putWords: async(oldTitle,newWords) => {
    const res = await axios.put(`http://127.0.0.1:5000/words/${oldTitle}`,`words=${newWords}`)
    console.log(res.data)
  },
  //delete Object from localhost
  deleteWords: async(oldTitle) => {
    const res = await axios.delete(`http://127.0.0.1:5000/words/${oldTitle}`)
    console.log(res.data)
  }
}

export default restfulMethods;