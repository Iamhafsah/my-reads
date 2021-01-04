import React from 'react'
import { Route } from 'react-router-dom' ;
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import PageBody from './PageBody'
import './App.css'



class BooksApp extends React.Component {
  state = {
    bookList: [],
    searchQuery: ''
  }

// Function to get all books
  componentDidMount(){
    BooksAPI.getAll()
    .then((bookList) => {
      this.setState({
        bookList
      })
    })
  }

// Function to move book from one shelf to another
  moveBook = (book, shelf) =>{
   BooksAPI.update(book, shelf).then(() =>{
     this.setState((prevState)=>({
      bookList: prevState.bookList.map((item) => {
        if(item.id === book.id){
          item.shelf = shelf
        }return item
      })
    })) 
   })
  }


// Search function: To search for books from the search input
 search = (query) =>{
  BooksAPI.search(query)
   .then((books) => {
       if(query !== ''){
          this.setState({bookList: books})
         }else{
          this.setState({searchQuery: '', bookList: [] })
        }        
    })
  }

// This function takes in the search query and calls the search function
  trimQuery = (query) => {
  if (query) {
      this.setState({ searchQuery: query })}
      this.search(query)
  }


  render() {
    return (
      <div className="app">
        <Route exact path='/'
        render={()=>(
          <PageBody
          bookList={this.state.bookList}
          moveBook={this.moveBook}
          />
        )} />
        
        <Route  path='/search'
        render={()=>(
          <SearchPage 
          moveBook={this.moveBook}
          bookList={this.state.bookList}
          searchQuery={this.state.searchQuery}
          trimQuery={this.trimQuery}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
