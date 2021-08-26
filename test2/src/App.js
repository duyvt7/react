
import './App.css';
import TodoItem from './component/TodoItem';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoItem title = 'go to super market'/>
        <TodoItem title= 'go to school'/>
        <TodoItem title = 'go shopping' />
      </header>
    </div>
  );
}

export default App;
