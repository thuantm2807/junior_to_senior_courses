import React from 'react';

const Searchbox = ({searchChange, searchfield}) => {
    return (
        <div className="pa2">
            <input className="pa3 ba b--green bg-lightest-blue" type="search" onChange={searchChange} />
        </div>
    ); 
}

export default Searchbox;