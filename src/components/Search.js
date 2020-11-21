import React from 'react';

function Search({searchWord, setSearchWord, filterEmployees}) {
    return (
        <form className="searchBar"
        onSubmit = {(event)=> filterEmployees(searchWord, event)}>
            <input type="search"
            placeholder="Search"
            value = {searchWord}
            onChange = {(event)=> setSearchWord(event.target.value)}
            />
            <input type="submit" value="Submit"/>
        </form>
    )
}
export default Search;
 