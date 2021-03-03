import React from 'react';

function List(props){
    console.log(props.movies)
    return (<div>{props.movies.map((movie) => (
        <div> <h3>{movie.Title}</h3>
            <img src= {movie.Poster}/>
        </div>
    )) }</div>)

}

export default List;
