import React from 'react';

const BookAddComponent = ({props}) => {
    return (
        <div>
            <p>
                <input type="text" id="newBookName" name="newBookName"/>
                <button onClick={() => props.onAddBook(document.getElementById('newBookName').value)}>Add Book</button>
            </p>
        </div>
    )
}

export default BookAddComponent;