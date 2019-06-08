import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchField, onSearchChange}) => {
    return (
        <div className="pa1 tc">
        <input
         type='search' 
         placeholder='search robots'
        className="pa3 mb1 ba nice bw2 bg-lightest-blue"
        onChange={onSearchChange}
        value={searchField}
         />
        </div>
    );
}

export default SearchBox;