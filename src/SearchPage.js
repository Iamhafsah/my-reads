import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import CloseSearchArrow from './CloseSearchArrow.js'
import BookTemplate from './BookTemplate.js'

class SearchPage extends Component{
    state={
        books: [],
        searchQuery: ''
    }

    
    // Search function: To search for books from the search input
    search = (query) =>{
        BooksAPI.search(query)
        .then((books) => {
             books = (query === '' ? [] : (books))
                if(!books.error)
                    books.forEach((book)=>{
                        const bookList = this.props.bookList
                        const existingBook = bookList.find(item => item.id === book.id)

                        existingBook ? (book.shelf = existingBook.shelf) : ( book.shelf = 'none')
                    })     
                this.setState({books})       
        })
    }

    // This function takes in the search query and calls the search function
    trimQuery = (query) => {
        if (query) {
            this.setState({ searchQuery: query })}
            this.search(query)
    }


    render(){
        const {searchQuery, books} = this.state

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <CloseSearchArrow />
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" onChange={(e)=>this.trimQuery(e.target.value)}
                            value={searchQuery}
                            /> 
                        </div>
                    </div>

                    <div className="search-books-results">
                        <ol className="books-grid">
                            { !books.error ? books.map((book)=>(
                                <BookTemplate key={book.id}
                                title={book.title}
                                authors={book.authors}
                                moveBook={this.props.moveBook}
                                book={book}
                                />
                            )) : null
                            }
                        </ol>
                    </div>
                </div>
            </div>
        )}
}

export default SearchPage
