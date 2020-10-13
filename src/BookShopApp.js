const Book = require('./components/Book.js')
const BookShop = require('./components/BookShop.js')
const Basket = require('./components/Basket.js')
const BasketPriceCalc = require('./components/BasketPriceCalc.js')
const BookDiscount = require('./components/BookDiscount')


function main() {



  // Generating all the books on page load
  const book1 = new Book('Moby Dick', 15.20, 1851);
  const book2 = new Book('The Terrible Privacy of Maxwell Sim', 13.14, 2010);
  const book3 = new Book('Still Life With Woodpecker', 11.05, 1980);
  const book4 = new Book('Sleeping Murder', 10.24, 1976);
  const book5 = new Book('Three Men in a Boat', 12.87, 1889);
  const book6 = new Book('The Time Machine', 10.43, 1895);
  const book7 = new Book('The Caves of Steel', 8.12, 1954);
  const book8 = new Book('Idle Thoughts of an Idle Fellow', 7.32, 1886);
  const book9 = new Book('A Christmas Carol', 4.23, 1843);
  const book10 = new Book('A Tale of Two Cities', 6.32, 1859);
  const book11 = new Book('Great Expectations', 13.21, 1861);


  const bookarr = [book1, book2, book3, book4, book5, book6, book7, book8, book9, book10, book11];
  const bookShop = new BookShop(bookarr)
  const priceCalc = new BasketPriceCalc()
  const bookDiscount = new BookDiscount()



  // Basket 1 example
  const expectedValueForExample1 = 24.69
  const basket1Items = [bookShop.getBookByTitle('The Terrible Privacy of Maxwell Sim'), bookShop.getBookByTitle('Three Men in a Boat')]
  const exampleBasket1 = new Basket(basket1Items)
  const totalBasket1PriceBeforeDiscount = priceCalc.getPriceForBasket(exampleBasket1)
  const finalPriceBasket1 = bookDiscount.getDiscountedPrice(exampleBasket1, totalBasket1PriceBeforeDiscount)

  console.log('Price before discount for basket 1 =', totalBasket1PriceBeforeDiscount)
  console.log('Final price for basket 1 =', finalPriceBasket1)
  if (finalPriceBasket1 === expectedValueForExample1) {
    console.log('Test 1 passed')
  }




  // Basket 2 example
  const expectedValueForExample2 = 35.27
  const basket2Items = [bookShop.getBookByTitle('Still Life With Woodpecker'),
  bookShop.getBookByTitle('Three Men in a Boat'),
  bookShop.getBookByTitle('Great Expectations')]
  const exampleBasket2 = new Basket(basket2Items)
  const totalBasket2PriceBeforeDiscount = priceCalc.getPriceForBasket(exampleBasket2)
  const finalPriceBasket2 = bookDiscount.getDiscountedPrice(exampleBasket2, totalBasket2PriceBeforeDiscount)

  console.log('Price before discount for basket 2 =', totalBasket2PriceBeforeDiscount)
  console.log('Final price for basket 2 =', finalPriceBasket2)
  if (finalPriceBasket2 === expectedValueForExample2) {
    console.log('Test 2 passed')
  }



  // Basket 3 example
  const expectedValueForExample3 = 36.01
  const basket3Items = [bookShop.getBookByTitle('The Terrible Privacy of Maxwell Sim'),
  bookShop.getBookByTitle('Three Men in a Boat'),
  bookShop.getBookByTitle('Great Expectations')]
  const exampleBasket3 = new Basket(basket3Items)
  const totalBasket3PriceBeforeDiscount = priceCalc.getPriceForBasket(exampleBasket3)
  const finalPriceBasket3 = bookDiscount.getDiscountedPrice(exampleBasket3, totalBasket3PriceBeforeDiscount)

  console.log('Price before discount for basket 3 =', totalBasket3PriceBeforeDiscount)
  console.log('Final price for basket 3 =', finalPriceBasket3)
  if (finalPriceBasket3 === expectedValueForExample3) {
    console.log('Test 3 passed')
  }

  const booksArray = process.argv.slice(2)

  const userBooks = booksArray.map(bookTitle => {
    return bookShop.getBookByTitle(bookTitle)
  })

  const userBasket = new Basket(userBooks)
  const totalUserBasketBeforeDiscount = priceCalc.getPriceForBasket(userBasket)
  const finalPriceUserBasket = bookDiscount.getDiscountedPrice(userBasket, totalUserBasketBeforeDiscount)

  console.log('Price of selected books before discount:', totalUserBasketBeforeDiscount)
  console.log('Price of selected books after discount:', finalPriceUserBasket)

}

main();