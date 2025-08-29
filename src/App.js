
import './App.css';
import ClassCounter from './component/ClassCounter';
import FunctionCounter from './component/FunctionCounter';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import Student from './component/Student';
import UseStateExample from './Hooks/UseStateExample';
import UsObject from './Hooks/UsObject';
import UsArray from './Hooks/UsArray';
import CounterComponent from './Hooks/CounterComponent';
import AComponent from './Hooks/AComponent';
import { createContext } from 'react';
import CComponent from './Hooks/CComponent';
import ControlledForm from './Hooks/ControlledForm';
import MultipleInputForm from './Hooks/MultipleInputForm';
import FunctionInput from './Hooks/FunctionInput';
import MultiForm from './Hooks/MultiForm';
export const NameContext = createContext();
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
        <UseStateExample />
        < UsObject />
        < UsArray />
        < CounterComponent />

        <NameContext.Provider value={"Bhatia"}>
          <CComponent  />
        </NameContext.Provider>
       <ControlledForm />
       <MultipleInputForm />
       < FunctionInput />
       <MultiForm />
      </div>
    </div>
  );
}

export default App;
