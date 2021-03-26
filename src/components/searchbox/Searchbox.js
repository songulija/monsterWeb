import React from 'react'
import './styles.css'

function Searchbox({placeholder, searchHandler}) {
    return (
            <input type='search' className='search' placeholder={placeholder}
             onChange={searchHandler} />
 
    )
}//on change will change state of searchField in App js

export default Searchbox
