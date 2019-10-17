import React from 'react';

import Header from '../Header/Header.js';
import BookForm from '../BookForm/BookForm.js';
import BookList from '../BookList/BookList.js';

class LibraryContainer extends React.Component {
  // Breaking down collections in state:
  // https://medium.com/@srph/react-maintaining-state-for-collections-80a1d9615886
  constructor(props) {
    super(props);
    this.state = {
      newId: 1,
      bookIds: [],
      titles: {},
      authors: {},
      pages: {},
      readStatus: {}
    }
    this.newBook = this.newBook.bind(this);
    this.updateReadStatus = this.updateReadStatus.bind(this);
  }

  newBook = (bookData) => {
    // Here we use prevState to retain the values already in state
    // with the spread operator
    // See: https://stackoverflow.com/questions/43638938/updating-an-object-with-setstate-in-react
    this.setState(prevState => ({ 
      bookIds: this.state.bookIds.concat(this.state.newId),
      titles: {
        ...prevState.titles,
        [this.state.newId]: bookData.title
      },
      authors: {
        ...prevState.authors,
        [this.state.newId]: bookData.author
      },
      pages: {
        ...prevState.pages,
        [this.state.newId]: bookData.pages
      },
      readStatus: {
        ...prevState.readStatus,
        [this.state.newId]: bookData.readStatus
      },
      newId: this.state.newId + 1,
    }));
  }

  updateReadStatus = (selectedId) => {
    // TODO callback for updating readStatus with ID
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

  deleteBook = (selectedId, index) => {
    // TODO callback similar to updateReadStatus
    // See: https://www.robinwieruch.de/react-state-array-add-update-remove
    // Also: https://codeburst.io/use-es2015-object-rest-operator-to-omit-properties-38a3ecffe90
  }

  render() {
    return (
      <div>
        <Header text="Library"/>
        <BookForm newBook={this.newBook}/>
        <BookList 
          bookIds={this.state.bookIds} 
          titles={this.state.titles} 
          authors={this.state.authors} 
          pages={this.state.pages} 
          readStatus={this.state.readStatus} 
          updateReadStatus={this.updateReadStatus}/>
      </div>
    );
  }
}

export default LibraryContainer;