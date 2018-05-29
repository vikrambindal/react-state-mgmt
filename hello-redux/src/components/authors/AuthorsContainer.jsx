import React, { Component } from 'react';
import {connect} from 'react-redux';
import listOfAuthors from '../../actions/authorAction';
import AuthorListComponent from './AuthorListComponent';
import AuthorAddComponent from './AuthorAddComponent';

class AuthorsContainer extends Component {

    componentDidMount() {
        const {loadAuthors} = this.props;
        loadAuthors();
    }

    render() {
        return (
            <div>
              <AuthorAddComponent props={this.props}/>
              <AuthorListComponent props={this.props}/>
            </div>
        );
    }
}
          
function mapStateToProps(state) {
    return {
        authorList: state.authors.authorList
    };
}
  
function mapDispatchToProps(dispatch) {
    return {
        loadAuthors: () => {
            dispatch({type:'AUTHORS', payload: listOfAuthors()})
        },
        onAddBook: (bookName) => {
            dispatch({ type: 'ADD_AUTHOR', payload: {id:new Date().toLocaleString(), name:bookName} });
        },
        onEditBook: (id) => {console.log('I clicked', id); },
        onDeleteBook: (id) => {
            dispatch({ type: 'DELETE_AUTHOR', payload: {id: id} });
        }
    };
}
  
export default connect(mapStateToProps,mapDispatchToProps)(AuthorsContainer);