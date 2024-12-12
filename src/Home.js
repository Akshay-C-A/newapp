import { useState } from "react";

const Home = () => {
    // const handleClick = () =>{
    //     alert("Button Clicked");
    // }
    // const handleClickAgain = (name) => {
    //     alert("Button Clicked By "+name);
    // }

    const [name,setName] = useState("Akshay Anil");
    const [age, setAge] = useState(20);
    const handleName = () =>{
        setName("Akshay C A");
        setAge(21);
    }

    return ( 
        <div className="home">
            <h3>Home Page</h3>
            <p>{name} is {age} years old</p>

            {/* <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {handleClickAgain("Akshay")}}>Click Me Again</button>  */}
            {/* can use 'e' in anonyamus function to get event logs and details pass e as a parameter in handleClickAgain function inside*/}

            <button onClick={handleName}>Change Name</button>
        </div>
    );
}

export default Home;