import './App.css';
import TodoInput from './components/TodoInput/TodoInput'
import TodoButtons from './components/TodoButtons/TodoButtons'
import TodoList from './components/TodoList/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoInput/>
        <TodoButtons/>
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
