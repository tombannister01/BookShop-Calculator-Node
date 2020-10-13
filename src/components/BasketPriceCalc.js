module.exports = class BasketPriceCalc {
  getPriceForBasket(basket) {
    const mappedBooksPrice = basket.books.map(book => {
      return book.price
    })
    
    const totalBasketPrice = mappedBooksPrice.reduce((acc, currentValue) => {
    
      return acc + currentValue
    }, 0)
    return (Math.floor(totalBasketPrice * 100) / 100)
  }
  
}