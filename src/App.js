import React, {useState, useEffect} from "react";
import axios from 'axios';


import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./listMovies";
import Search from "./Search";

function App() {
    const [movies, setMovies] = useState([""]);
    const [searchTerm, setSearchTerm] = useState("Pokemon");
    const API_KEY = process.env.REACT_APP_API_KEY;


    useEffect(async () => {

        const result = await axios(
            `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
        );
        
        if (result.data.Search){
            setMovies(result.data.Search);
        }

        console.log(movies)

    }, [searchTerm]);

    return (<div className="movieFrame">
        <h1> Movie listings </h1>
        <Search setTerm={setSearchTerm} value={searchTerm}/>
        <List movies={movies}/>
    </div>)


};


export default App;
