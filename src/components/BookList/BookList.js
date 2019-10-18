import React from 'react';
import PropTypes from 'prop-types';
import './BookList.css'

class BookList extends React.Component {

  render() {
    return (
      <div className="book-list">
        <div className="list-header">
          <div className="header-title">Title</div>
          <div className="header-author">Author</div>
          <div>Pages</div>
          <div>Read Status</div>
          <div>Update Status</div>
          <div>Delete</div>
        </div>
        {this.props.bookIds.map((id) =>
          <div key={id} className="book">
            <div className="title">{this.props.titles[id]}</div>
            <div className="author">{this.props.authors[id]}</div>
            <div className="pages">{this.props.pages[id]}</div>
            <div className="read-status">{this.props.readStatus[id]}</div>
            {/* Here we need the arrow function to prevent infinite looping
                if we were to call only updateReadStatus(id) */}
            <div className="update-btn"><button onClick={() => this.props.updateReadStatus(id)}>Update</button></div>
            {/* TODO Button for deleting book */}
            <div className="delete-btn"><button onClick={() => this.props.deleteBook(id)}>Delete</button></div>
          </div>
        )}
      </div>
    )
  }
}

BookList.propTypes = {
  bookIds: PropTypes.array.isRequired,
  titles: PropTypes.object.isRequired,
  authors: PropTypes.object.isRequired,
  pages: PropTypes.object.isRequired,
  readStatus: PropTypes.object.isRequired,
  updateReadStatus: PropTypes.func.isRequired,
  deleteBook: PropTypes.func.isRequired
}

export default BookList;
