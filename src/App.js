
import './App.css';
import ClassCounter from './component/ClassCounter';
import FunctionCounter from './component/FunctionCounter';
import Todo from './Todo';

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 ToDo</h1>
      <div className="row">
      <Todo />
      </div>
    </div>
  );
}

export default App;
