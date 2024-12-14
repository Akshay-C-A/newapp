import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

// const Home = () => {
//     // const handleClick = () =>{
//     //     alert("Button Clicked");
//     // }
//     // const handleClickAgain = (name) => {
//     //     alert("Button Clicked By "+name);
//     // }

//     const [name,setName] = useState("Akshay Anil");
//     const [age, setAge] = useState(20);
//     const handleName = () =>{
//         setName("Akshay C A");
//         setAge(21);
//     }

//     return ( 
//         <div className="home">
//             <h3>Home Page</h3>
//             <p>{name} is {age} years old</p>

//             {/* <button onClick={handleClick}>Click Me</button>
//             <button onClick={() => {handleClickAgain("Akshay")}}>Click Me Again</button>  */}
//             {/* can use 'e' in anonyamus function to get event logs and details pass e as a parameter in handleClickAgain function inside*/}

//             <button onClick={handleName}>Change Name</button>
//         </div>
//     );
// }

const Home = () => {

    // const [blogs,setBlogs] = useState([
    //     { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    //     { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    //     { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    //   ]);

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter( (blog) => blog.id !== id);
    //     setBlogs(newBlogs);
    // }
    
    // const [name,setName] = useState("Akshay C A");

    // useEffect( () => {
    //     console.log("Used useEffects");
    // },[name])

    const {data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs")

    return ( 
        <div className="home">
            {/* {blogs && <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete}/>} */}
            {error && <div><h2>{error}</h2></div> }
            {isPending && <div><h2>Loading.....</h2></div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            {/* <BlogList blogs={blogs.filter( (blog) => blog.author === "mario")} title="Mario's blogs" handleDelete={handleDelete} /> */}
            {/* {name} <br /> */}
            {/* <button onClick={ () => { setName("Akshay Anil")}}>Click Here</button> */}
            
        </div>
    );
}

export default Home;