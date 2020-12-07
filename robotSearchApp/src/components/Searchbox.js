import React from 'react';

const SearchBox = ({searchField, searchChange}) => {
    return ( //when you have more than one item, wrap in a div and use ()
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='Robot Search'
                onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;