
import './App.css';
import ClassCounter from './component/ClassCounter';
import FunctionCounter from './component/FunctionCounter';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import Student from './component/Student';

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-1 Counter Application</h1>
      <div className="row">
        {/* <ClassCounter />
        <FunctionCounter />
        <EventBind name="Bhatia" />
        <ParentComponent /> */}
        <Student />
      </div>
    </div>
  );
}

export default App;
