import React, {Component} from 'react'
import BookSection from './BookSection.js'


class PageBody extends Component {
  render(){
    const bookList = this.props.bookList
    const currentlyReading = bookList.filter(book => book.shelf === 'currentlyReading');
    const wantToRead = bookList.filter(book => book.shelf === 'wantToRead');
    const read = bookList.filter(book => book.shelf === 'read');
    

    return (
        <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className='list-books-content'>

           <BookSection 
            shelfName='Currently Reading' 
            books={currentlyReading}
            moveBook={this.props.moveBook}
            />

            <BookSection 
            shelfName='Want to Read' 
            books={wantToRead}
            moveBook={this.props.moveBook}
            />

            <BookSection 
            shelfName='Read' 
            books={read}
            moveBook={this.props.moveBook}
            />
            
        </div>
      </div>
    )
  }
}

export default PageBody
