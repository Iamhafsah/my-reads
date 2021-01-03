import React from 'react'
import {Link} from 'react-router-dom'

export const CloseSearchArrow = () => {
    return (
      // the arrow that links users back to the book shelf
      
      <Link to='/' className="close-search">
      Close
      </Link>
     )
}

export default CloseSearchArrow