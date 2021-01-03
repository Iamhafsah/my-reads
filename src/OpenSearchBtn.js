import React from 'react'
import { Link } from 'react-router-dom'


const OpenSearchBtn = () => {
    return (
        // the button that links users to the search page
        <Link to='/search' className="open-search">
            <button>Add a book</button>
        </Link>
    )
}

export default OpenSearchBtn
