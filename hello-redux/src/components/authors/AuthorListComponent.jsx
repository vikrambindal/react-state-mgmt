import React from 'react';

const AuthorListComponent = ({props}) => {
    return (
        <div>
              <h1>Author List</h1>
              <p>
                  <label>Total number of authors: {props.authorList.length}</label>
              </p>
              <table>
                  <thead  className="App-intro">
                      <tr>
                        <td>Authors</td>
                        <td>Actions</td>
                      </tr>
                  </thead>
                  <tbody>
                    {props.authorList.map((author) => {
                        return <tr key={author.id}>
                          <td>{author.name}</td>
                          <td><button onClick={() => props.onEditBook(author.id)}>Edit</button>
                              <button onClick={() => props.onDeleteBook(author.id)}>Delete</button>
                          </td>
                        </tr>
                      })
                    }
                  </tbody>
              </table>
            </div>
    );
}

export default AuthorListComponent;