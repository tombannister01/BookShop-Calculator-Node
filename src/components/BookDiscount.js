module.exports = class BookDiscount {

  getDiscountedPrice(basket, totalBasketPrice) {
    const currentDiscountForNewBooks = 0.9
    const currentDiscountForBasket = 0.95

    const priceArray = basket.books.map(book => {
     if (book.year > 2000) {
       return book.price * currentDiscountForNewBooks
     } else {
       return book.price
     }
     
     
   })

   const totalPrice = priceArray.reduce((acc, currentValue) => {
       
     return acc + currentValue
   }, 0)
    
     if (totalPrice >= 30) {
       return (Math.floor((totalPrice * currentDiscountForBasket) * 100 ) / 100)

     } else {

       return (Math.floor(totalPrice * 100) / 100)
     }
   
 }
}