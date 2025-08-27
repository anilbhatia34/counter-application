
import './App.css';
import ClassCounter from './component/ClassCounter';
import FunctionCounter from './component/FunctionCounter';

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-1 Counter Application</h1>
      <div className="row">
        <ClassCounter />
        <FunctionCounter />
      </div>
    </div>
  );
}

export default App;
