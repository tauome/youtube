import React, { useState } from "react";

const SearchBar = ({onFormSubmit})=> {
    const [term, setTerm] = useState('');

    return (
        <div className="search-bar ui segment">
            <form onSubmit={e => {
                e.preventDefault();
                //callback from parent component
                onFormSubmit(term); 
            }} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input onChange={e=> setTerm(e.target.value)} value={term} type='text'></input>
                </div>
            </form>
        </div>
    )


}


export default SearchBar;