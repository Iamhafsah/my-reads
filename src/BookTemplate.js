import React, {Component} from 'react'

class Book extends Component {
    
  render(){
    const {book, title, authors, moveBook} = this.props

    return (
        <div>
            <li>
            <div className="book">
            <div className="book-top">
            <div className="book-cover" 
            style={{ width: 128, height: 192, 
            backgroundImage: `url(${book.imageLinks.smallThumbnail ?
            book.imageLinks.smallThumbnail : ''})`}}>
            </div>

            <div className="book-shelf-changer">
            <select value={book.shelf} onChange={e => moveBook(book , e.target.value)}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
            </div>
            </div>

            <div className="book-title">{title}</div>
            <div className="book-authors">{authors}</div>
            </div>
            </li>

        </div>
    )}
}

export default Book
