import React from 'react';

const AuthorAddComponent = ({props}) => {
    return (
        <div>
            <p>
                <input type="text" id="newAuthorName" name="newAuthorName"/>
                <button onClick={() => props.onAddBook(document.getElementById('newAuthorName').value)}>Add Book</button>
            </p>
        </div>
    );
}

export default AuthorAddComponent;