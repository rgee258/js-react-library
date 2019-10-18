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
    this.initialState = this.state;
    this.toggleForm = this.toggleForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  toggleForm() {
    const bookForm = document.querySelector('.form-wrapper');
    if (bookForm.classList.contains('hide')) {
      bookForm.classList.remove('hide');
    } else {
      this.hideForm();
    }
  }

  hideForm() {
    const bookForm = document.querySelector('.form-wrapper');
    if (!bookForm.classList.contains('hide')) {
      bookForm.classList.add('hide');
    }
  }

  resetForm() {
    // Reset the state back using the initialState from the constructor
    this.setState(this.initialState);
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
    this.hideForm();
    this.resetForm();
  }

  render() {
    return (
      <div className="form-container">
        <button 
          id="toggle-form"
          onClick={this.toggleForm}
        >Add Book</button>
        <div className="form-wrapper hide">
          <form id="book-form" onSubmit={this.handleSubmit}>
            <label>Title</label>
            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleInput} required />
            <label>Author</label>
            <input type="text" id="author" name="author" value={this.state.author} onChange={this.handleInput} required />
            <label>Pages</label>
            <input type="number" id="pages" name="pages" min="1" max="999999" value={this.state.pages} onChange={this.handleInput} required />
            <label>Reading Status</label>
            <div className="radio-btns">
              <input type="radio" id="read" name="readStatus" value="Read" checked={this.state.readStatus === "Read"} onChange={this.handleInput} />
              <span className="read-radio-text">Read</span>
              <input type="radio" id="unread" name="readStatus" value="Unread" checked={this.state.readStatus === "Unread"} onChange={this.handleInput} />
              <span className="unread-radio-text">Unread</span>
            </div>
            <input type="submit" id="submit" className="form-submit" value="Add" />
          </form>
        </div>
      </div>
    )
  }
}

BookForm.propTypes = {
  newBook: PropTypes.func.isRequired
}

export default BookForm;
