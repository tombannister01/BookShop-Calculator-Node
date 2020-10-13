module.exports = class BookShop {
  constructor(books) {
    this.books = books
  }

  getBookByTitle(title) {
    const book = this.books.find(book => {
      if (book.title.toLowerCase() === title.toLowerCase()) {
        return true
      } else  {
        return false
      }
    })
    return book
    
  }
}