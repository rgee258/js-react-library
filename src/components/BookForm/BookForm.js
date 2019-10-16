import React from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

class BookForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      pages: 1,
      readStatus: "Read"
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleForm() {
    const bookForm = document.querySelector('#book-form');
    if (bookForm.classList.contains('hide')) {
      bookForm.classList.remove('hide');
    } else {
      this.hideForm();
    }
  }

  hideForm() {
    const bookForm = document.querySelector('#book-form');
    if (!bookForm.classList.contains('hide')) {
      bookForm.classList.add('hide');
    }
  }

  handleInput = (event) => {
    // Get the name of the input that is the same as in state
    const name = event.target.name;

    this.setState({
      // Update the state according to the associated name and event value
      [name]: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.newBook(this.state);
  }

  render() {
    return (
      <div>
        <div 
          id="form-btn"
          onClick={this.toggleForm}
        >NEW BOOK</div>
        <div id="book-form">
          <form onSubmit={this.handleSubmit}>
            <label>Title: </label>
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleInput} required />
            <label>Author: </label>
            <input type="text" id="author" name="author" value={this.state.author} onChange={this.handleInput} required />
            <label>Pages: </label>
            <input type="number" id="pages" name="pages" min="1" max="999999" value={this.state.pages} onChange={this.handleInput} required />
            <label>Reading Status:</label>
            <input type="radio" id="read" name="readStatus" value="Read" checked={this.state.readStatus === "Read"} onChange={this.handleInput} />Read
            <input type="radio" id="unread" name="readStatus" value="Unread" checked={this.state.readStatus === "Unread"} onChange={this.handleInput} />Unread
            <input type="submit" id="submit" className="form-submit" value="Add" />
          </form>
        </div>
      </div>
    )
  }
}

BookForm.propTypes = {
  // Fill in prop types here
  // Actually, are proptypes even necessary?
}

export default BookForm;