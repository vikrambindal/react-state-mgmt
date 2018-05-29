import React, {Component} from 'react';

class BookEditComponent extends Component {

    render() {
        return (
            <h1>Edit Book {this.props.match.params.bookId}</h1>
        );
    }
}

export default BookEditComponent;