import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Create from './Create';

// function App() {
//   const name = "Akshay";
//   const name2 = <h1>C A</h1>;
//   return (
//     <div className="App">
//       <h1>Hello {name}</h1>
//       {name2}

//     < User />
//     < User2 name="Akshay Anil" age={22} />
//     </div>
//   );
// }

// const User = () => {
//   return(
//     <div>
//       <h3>Akshay C A</h3>
//       <h3>Age : 21</h3>
//     </div>
//   );
// }

// const User2 = (props) => {
//   return(
//     <div>
//       <h3>{props.name}</h3>
//       <h3>{props.age}</h3>
//     </div>
//   );
// }

// function App() {
//   const title = "WELCOME TO MY NEW REACT APP";
//   const link = "https://www.google.com";
//   return (
//     <div className="App">
      
//       <Navbar></Navbar>

//       <div className="content">
//         <p>HAI MY NAME IS AKSHAY</p>
//         <p>Random number : {Math.random(10)}</p>
//         <h3>
//           <a href={link}>Google Link</a>
//         </h3>
//       </div>

//     </div>
//   );
// }

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
