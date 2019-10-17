import React from 'react';
import PropTypes from 'prop-types';
import './BookList.css'

class BookList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="book-list">
        {this.props.bookIds.map((id, index) =>
          <div key={id} className="book">
            <div className="title">{this.props.titles[id]}</div>
            <div className="author">{this.props.authors[id]}</div>
            <div className="pages">{this.props.pages[id]}</div>
            <div className="readStatus">{this.props.readStatus[id]}</div>
            {/* Here we need the arrow function to prevent infinite looping
                if we were to call only updateReadStatus(id) */}
            <div onClick={() => this.props.updateReadStatus(id)}>Update</div>
            {/* TODO Button for deleting book */}
          </div>
        )}
      </div>
    )
  }
}

BookList.propTypes = {
  // TODO Add proptypes
}

export default BookList