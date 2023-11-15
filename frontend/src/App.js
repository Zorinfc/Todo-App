import './App.css';
import TodoInput from './components/TodoInput/TodoInput'
import TodoList from './components/TodoList/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
//import TodoButtons from './components/TodoButtons/TodoButtons'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoInput/>

        {/* Yapıalcak */}
        {/* <TodoButtons/> */}
        <TodoList/>
      </header>
    </div>
  );
}

export default App;
