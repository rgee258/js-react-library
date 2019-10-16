import React from 'react';

import Header from '../Header/Header.js';
import BookForm from '../BookForm/BookForm.js';
import BookFactory from '../../utils/BookFactory.js';

class LibraryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [],
      bookId: 0,
    }
    this.newBook = this.newBook.bind(this);
  }

  newBook = (bookData) => {
    this.setState({ bookId: this.state.bookId += 1 });
    let book = BookFactory(this.state.bookId, bookData.title, bookData.author
      , bookData.pages, bookData.readStatus)
    console.log(book);
    // TODO update the state to add the new book
    // Maybe make it an object?
    //this.setState({ library: this.state.library.push(newBook) });
  }

  updateReadStatus = () => {
    // TODO callback for updating readStatus with ID
  }

  deleteBook = () => {
    // TODO callback similar to updateReadStatus
  }

  render() {
    return (
      <div>
        <Header text="Library"/>
        <BookForm newBook={this.newBook}/>
      </div>
    );
  }
}

export default LibraryContainer;