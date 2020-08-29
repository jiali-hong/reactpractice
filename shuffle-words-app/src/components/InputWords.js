import React from 'react';
import titleFormat from './titleFormat'

class InputWords extends React.Component{
    dict = Object.assign({}, this.props.obj.words);
    state = {
      title: this.props.obj.title === '' ? '': titleFormat.getFormatedTitle(this.props.obj.title),
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
      let title = titleFormat.getUnFormatedTitle(this.state.title);
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
      this.props.obj.setWordStatus('Original');
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

export default InputWords;