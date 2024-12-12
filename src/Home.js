import { useState } from "react";

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

    const [blogs,setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    return ( 
        <div className="home">
            {blogs.map( (blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by : {blog.author}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;