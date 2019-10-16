const BookFactory = (id, title, author, pages, readStatus) => {

  function info() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.readStatus}`;
  }

  function update() {
    // We need to change the book details, so we change state
    // With a changed state, we need a rerender
  }

  return {
    id, title, author, pages, readStatus, info, update
  }
}

export default BookFactory;