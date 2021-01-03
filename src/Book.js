import React, {Component} from 'react'
import BookTemplate from './BookTemplate'

class Book extends Component {
    
    render(){

        // this creates a book for each item in the various shelves
        // the books props here is from PageBody.js where each book is assigned a shelf
        const{books, moveBook} = this.props
    
        return (
          
        <div className='books-grid'>
            {books.map((book)=>(
                <BookTemplate key={book.id}
                title={book.title}
                authors={book.authors}
                moveBook = {moveBook}
                book= {book}
                />
            )) 
            }
             
        </div>
    )}
}


export default Book
