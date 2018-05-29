import React from 'react';
import {connect} from 'react-redux';
import listOfBooks from '../../actions/bookAction';
import BookListComponent from './BookListComponent';
import BookAddComponent from './BookAddComponent';

class BookPage extends React.Component {

    componentDidMount() {
        const {loadBooks} = this.props;
        loadBooks();
    }

    render() {
        return (
            <div>
              <BookAddComponent props={this.props}/>
              <BookListComponent props={this.props} />
            </div>
        );
    }
}
          
function mapStateToProps(state) {
    return {
        bookList: state.books.booklist
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        loadBooks: () => {
            dispatch({type: 'BOOKS', payload: listOfBooks() });
        },
        onAddBook: (bookName) => {
            dispatch({ type: 'ADD_BOOK', payload: {id:new Date().toLocaleString(), name:bookName} });
        },
        onEditBook: (id, done) => {
            done('/books/' + id);
        },
        onDeleteBook: (id) => {
            dispatch({ type: 'DELETE_BOOK', payload: {id: id} });
        }
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(BookPage);