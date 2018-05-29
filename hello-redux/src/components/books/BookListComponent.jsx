import React from 'react';

const BookListComponent = ({props}) => {
    return (
        <div>
            <h1>Book List</h1>
            <p>
                <label>Total number of books: {props.bookList.length}</label>
            </p>
            <table>
                <thead  className="App-intro">
                    <tr>
                    <td>Book</td>
                    <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {props.bookList.map((book) => {
                        return <tr key={book.id}>
                            <td>{book.name}</td>
                            <td><button onClick={() => props.onEditBook(book.id, props.history.push)}>Edit</button>
                                <button onClick={() => props.onDeleteBook(book.id)}>Delete</button>
                            </td>
                        </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default BookListComponent;