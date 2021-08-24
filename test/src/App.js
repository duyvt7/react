
import './App.css';
import TodoItem from './component/toDoItem';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();
    this.TodoItem=[
      'Header',
      'Body',
      'Footer',
    ]
  }
  render(){
    return <div className='App'>
      {this.TodoItem.map((item)=> <TodoItem title={item}/>)}
    </div>
      
  }
}

export default App;
