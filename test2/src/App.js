
import './App.css';
import TodoItem from './component/TodoItem';
import {Component} from 'react'

class App extends Component{
  constructor(){
    super();
    this.ItemList= [
      { title:'go shopping', isComplete:true},
      { title:'go to school'},
      { title:'go to the supermarket'},
    ]
  }
  render(){
    return (
      <div className='App' >
        {this.ItemList.map((item, index) => 
          <TodoItem key={index} item={item}/>
        )}
      </div>
    )
  
  }
}
export default App;
