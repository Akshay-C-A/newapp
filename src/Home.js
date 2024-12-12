const Home = () => {
    const handleClick = () =>{
        alert("Button Clicked");
    }
    const handleClickAgain = (name) => {
        alert("Button Clicked By "+name);
    }
    return ( 
        <div className="home">
            <h3>Home Page</h3>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={() => {handleClickAgain("Akshay")}}>Click Me Again</button> 
            {/* can use 'e' in anonyamus function to get event logs and details pass e as a parameter in handleClickAgain function inside*/}
        </div>
    );
}

export default Home;