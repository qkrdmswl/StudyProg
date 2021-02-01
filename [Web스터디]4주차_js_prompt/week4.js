function Book(title, author, price, stock){
    this.title = title;
    this.author = author;
    this.price = price;
    this.stock = stock;

    this.toString = function(){
        return `${title} / ${author}저 / ${price}원`;
    }

    this.getStock = function(){
        return stock;
    }
}
let book1 = new Book('HTML5', '김연서', '30000', '5');
let book2 = new Book('JAVA', '황기태', '33000', '4');
let book3 = new Book('JavaScript', '윤인성', '25000', '3');
let book4 = new Book('OS', 'A.Silberschatz', '39000', '2');
let book5 = new Book('웹프로그래밍', '황기태', '28000', '1');

let bookAry = [book2, book3, book1, book4, book5];


function finder(bookName){
    this.bookName = bookName;

    for (var i in bookAry){
        if (bookName === bookAry[i].title){
            return bookAry[i].getStock();
        }
    }
}