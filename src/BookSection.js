import React from 'react'
import Book from './Book.js'
import OpenSearchBtn from  './OpenSearchBtn'


const BookSection = (props) => {
    return (
        <div>
            <div className='list-books-content'>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{props.shelfName}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            <Book 
                            books={props.books}
                            moveBook={props.moveBook}
                            />
                        </ol>
                    </div>
                </div>    
            </div>

            <OpenSearchBtn />
        </div>
    )
}

export default BookSection
