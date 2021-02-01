import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage'
import PageBody from './PageBody'
import './App.css'



class BooksApp extends React.Component {
  state = {
    bookList: [],
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
    BooksAPI.getAll().then((bookList)=>{
      this.setState({bookList})
    })
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
        <Router>
          <Switch>
            <div className="app">
              <Route exact path='/' >
                <PageBody
                  bookList={this.state.bookList}
                  moveBook={this.moveBook}
                />
              </Route>
              
              <Route  path='/search' >
                <SearchPage 
                  moveBook={this.moveBook}
                  bookList={this.state.bookList}
                />
              </Route>
            </div>
          </Switch>
        </Router>
    )
  }
}

export default BooksApp
