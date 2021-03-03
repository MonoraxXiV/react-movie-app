import React from 'react'

function Search (props){
    return(
    <input className="text" placeholder="insert movie name" value={props.value} onChange={(event)=> props.setTerm(event.target.value)} />
)
}

export default Search;
