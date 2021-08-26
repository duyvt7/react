
import './App.css';
import TodoItem from './component/TodoItem';
import {Component} from 'react'

class App extends Component{
  constructor(){
    super();
    this.ItemList= [
      { title:'go shopping'},
      { title:'go to school'},
      { title:'go to the supermarket'},
    ]
  }
  render(){
    return (
      <div className='App' >
        {this.ItemList.map((item) => 
          <TodoItem title={item.title}/>
        )}
      </div>
    )
  
  }
}
export default App;
