import "./App.css";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";

function App() {
  return (
    <div className="App">
      <ClassComponent count={10}></ClassComponent>
      <FunctionComponent count={15}></FunctionComponent>
    </div>
  );
}

export default App;
