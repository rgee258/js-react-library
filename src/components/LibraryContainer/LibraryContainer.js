import React from 'react';

import './LibraryContainer.css';
import Header from '../Header/Header.js';
import BookForm from '../BookForm/BookForm.js';
import BookList from '../BookList/BookList.js';

class LibraryContainer extends React.Component {
  // Breaking down collections in state
  // https://medium.com/@srph/react-maintaining-state-for-collections-80a1d9615886
  constructor(props) {
    super(props);
    this.state = {
      nextId: 1,
      bookIds: [],
      titles: {},
      authors: {},
      pages: {},
      readStatus: {}
    }
    this.newBook = this.newBook.bind(this);
    this.updateReadStatus = this.updateReadStatus.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
    this.displayState = this.displayState.bind(this);
  }

  newBook = (bookData) => {
    // Here we use prevState to retain the values already in state
    //  with the spread operator
    // See: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    this.setState(prevState => ({ 
      bookIds: this.state.bookIds.concat(this.state.nextId),
      titles: {
        ...prevState.titles,
        [this.state.nextId]: bookData.title
      },
      authors: {
        ...prevState.authors,
        [this.state.nextId]: bookData.author
      },
      pages: {
        ...prevState.pages,
        [this.state.nextId]: bookData.pages
      },
      readStatus: {
        ...prevState.readStatus,
        [this.state.nextId]: bookData.readStatus
      },
      nextId: this.state.nextId + 1,
    }));
  }

  updateReadStatus = (selectedId) => {
    const status = this.state.readStatus[selectedId];

    if (status === "Read") {
      this.setState(prevState => ({ 
        readStatus: { ...prevState.readStatus, [selectedId]: "Unread" } 
      }));
    } else {
      this.setState(prevState => ({ 
        readStatus: { ...prevState.readStatus, [selectedId]: "Read" } 
      }));
    }
  }

  deleteBook = (selectedId) => {
    // Here we use object destructuring with the rest operators to separate our
    //  property with selectedId from the existing objects in state
    // See the following and the comments for handling dynamic keys
    // https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
    const { [selectedId]: removedTitle, ...newTitles } = this.state.titles;
    const { [selectedId]: removedAuthor, ...newAuthors } = this.state.authors;
    const { [selectedId]: removedPages, ...newPages } = this.state.pages;
    const { [selectedId]: removedReadStatus, ...newReadStatuses } = this.state.readStatus;

    this.setState(prevState => ({
      // Use the vanilla filter method on arrays to remove them from state
      // https://www.robinwieruch.de/react-state-array-add-update-remove
      bookIds: prevState.bookIds.filter(id => id !== selectedId),
      titles: newTitles,
      authors: newAuthors,
      pages: newPages,
      readStatus: newReadStatuses
    }));

    setTimeout(this.displayState, 3000);
  }

  displayState = () => { 
    console.log("Displaying...");
    console.log(this.state); 
  }

  render() {
    return (
      <div>
        <Header text="React Library"/>
        <BookForm newBook={this.newBook}/>
        <BookList 
          bookIds={this.state.bookIds} 
          titles={this.state.titles} 
          authors={this.state.authors} 
          pages={this.state.pages} 
          readStatus={this.state.readStatus} 
          updateReadStatus={this.updateReadStatus}
          deleteBook = {this.deleteBook}/>
      </div>
    );
  }
}

export default LibraryContainer;
