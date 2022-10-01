import React from 'react';
import './App.css';

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      current:'',
      previous:'',
      display:0
    }
    this.clear= this.clear.bind(this)
    this.operations = this.operations.bind(this)
  };

 operations (number){
   const text = number.target.innerText;
   const {current} =this.state;
   const {previous} = this.state;
   const lastPressed = previous.charAt(previous.length -1);
   const num = [0,1,2,3,4,5,6,7,8,9];
   const ops = ['+','*','/']
   

   if(text === '.' && this.state.current.includes('.')) return 
   if (previous.includes(ops)) return
   if (text === 'AC' ) return this.clear()
   if( text === '=') return (
   this.setState({
     previous: `${eval(`${previous}` + `${current}`)}`,
     current: '',
     display: eval(`${previous}` + `${current}`),
   }) );

  const regex=/[+*/]/
   if (text === '+' || text === '*'|| text === '/' ) return (
    
      this.setState({ 
      previous: `${previous} ${current} ${text}`, 
      display: 0,
      current: ''} ))

      // console.log(previous.split('').reverse().filter(char => char!== ' ' && regex.test(char))[0])
    if(text === '-') return(
      previous.charAt(previous.length -1) !== text ? 
      this.setState({ 
        previous: `${previous} ${current} ${text}`, 
        display: 0,
        current: ''}) 
        : this.setState({ 
          previous: `${previous} ${current}` + ` ${text}`, 
          display: 0,
          current: ''}) )

    if (text === '0') return(
      current.charAt(current.length -1) !== text ? 
      this.setState({  
        current: `${current}` + `${text}`,
        display: `${current}` + `${text}`,
       })
       : this.setState({
        current: `${current}`.slice(0,-1) + `${text}`,
        display: `${current}`.slice(0,-1) + `${text}`,
       })
    )

    this.setState({  
     current: `${current}` + `${text}`,
     display: `${current}` + `${text}`,
    })
  };

  clear = () =>{
    this.setState({
      current:'',
      previous: '',
      display: 0
    })
}

  render(){
  return (
    <>
      <div className='calculator'>
          <div className='buttons'>
              <div id='displays'>
                <div className='previous'>{this.state.previous}</div>
                <div id="display">{this.state.display}</div>
              </div>
              <div className='btns' onClick={this.operations} >
              <button id='equals'>=</button>
                  <button id='zero'>0</button>
                  <button id='one'>1</button>
                  <button id='two'>2</button>
                  <button id='three'>3</button>
                  <button id='four'>4</button>
                  <button id='five'>5</button>
                  <button id='six'>6</button>
                  <button id='seven'>7</button>
                  <button id='eight'>8</button>
                  <button id='nine'>9</button>
              <button id='add'>+</button>
              <button id='subtract'>-</button>
              <button id='multiply'>*</button>
              <button id='divide'>/</button>
              <button id='decimal'>.</button>
              <button id='clear'>AC</button>
              </div>
          </div>
      </div>
    </>
  );
}
}

export default Calculator;
