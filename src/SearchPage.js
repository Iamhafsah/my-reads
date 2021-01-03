import React, {Component} from 'react'
import CloseSearchArrow from './CloseSearchArrow.js'
import BookTemplate from './BookTemplate.js'

class SearchPage extends Component{
 
    render(){
        const {searchQuery, bookList, trimQuery} = this.props

        return (
            <div>
                <div className="search-books">
                    <div className="search-books-bar">
                        <CloseSearchArrow />
                        <div className="search-books-input-wrapper">
                            <input type="text" placeholder="Search by title or author" onChange={(e)=>trimQuery(e.target.value)}
                            value={searchQuery}
                            /> 
                        </div>
                    </div>

                    <div className="search-books-results">
                        <ol className="books-grid">
                            {bookList.map((book)=>(
                                <BookTemplate key={book.id}
                                title={book.title}
                                authors={book.authors}
                                moveBook={this.props.moveBook}
                                book={book}
                                />
                            )) 
                            }
                        </ol>
                    </div>
                </div>
            </div>
        )}
}

export default SearchPage
