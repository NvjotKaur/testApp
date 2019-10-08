import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    name:"Navjot",
    age: 28
  }

  onChangeName = () =>{
   var name = this.state.name;
   this.setState({
     name:"Soniya"
   })
  }

  onChangeNameAnonFunc = (newName) => {
    this.setState({
      name:newName
    })
  }


  onChangeNameBind = (newName) => {
    this.setState({
      name:newName
    })
  }


  onChangeAge = (age) => {
    this.setState({
      age:age
    })
  }

//bt default it holds the event from where it is calling 
  onChangeInput = (event) => {
    event = event.target.value;
    this.setState({
      name:event
    })
  }

  render() {
  return (
      <div className="App">
        <h1> {this.state.name} </h1>
        <h4> {this.state.age} </h4>
        <button onClick={this.onChangeName}> changeName </button>
        <br/> <br/>

        <button onClick={()=>this.onChangeNameAnonFunc("Avneet")}> changeNameAnon </button>

        <br/> <br/>

        <button onClick={this.onChangeNameBind.bind(this, "Thomas")}> onChangeBind  </button>
        <button onClick={this.onChangeAge.bind(this, 30)}> changeAge </button>
        <br/> <br/>

        <input type="text" onChange={this.onChangeInput} value={this.state.name} />
      </div>
    );
  }
}

export default App;
