import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import AuthorsContainer from './components/authors/AuthorsContainer';
import BooksContainer from './components/books/BooksContainer';
import BookEditComponent from './components/books/BookEditComponent';

class App extends Component {

  render() {
    
    return (
      <div>
        <div className="Nav-Panel">
          <ul>
              <li><Link to={"/books"}>Books</Link></li>
              <li><Link to={"/authors"}>Authors</Link></li>
          </ul>
        </div>
        <div className="Content-Panel">
            <Switch>
              <Route path="/" exact render={() => {
                return <h1>Welcome</h1>
              }}/>
              <Route path="/books/:bookId" component={BookEditComponent}/>
              <Route path="/books" component={BooksContainer}/>
              <Route path="/authors" component={AuthorsContainer}/>
              <Route render={() => {
                return <h1>Oops... sorry the page you were looking for is not found.</h1>
              }}/>
            </Switch>
        </div>
      </div>
      
    );
  }
}

export default App;
