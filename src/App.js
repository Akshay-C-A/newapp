import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Akshay";
  const name2 = <h1>C A</h1>;
  return (
    <div className="App">
      <h1>Hello {name}</h1>
      {name2}

    < User />
    < User2 name="Akshay Anil" age={22} />


    </div>

  );
}

const User = () => {
  return(
    <div>
      <h3>Akshay C A</h3>
      <h3>Age : 21</h3>
    </div>
  );
}

const User2 = (props) => {
  return(
    <div>
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
    </div>
  );
}

export default App;
