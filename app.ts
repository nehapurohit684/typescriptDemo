import * as intefaces from './interfaces';
import{Category} from './enum';
import{UniversityLib,ReferenceItem} from './classes';
import {CalculateFee as calcFee} from './lib/utitlityFunctions'
import refBook from './encyclopedia';
//let fee = calcFee(5);

function GetAllBooks():intefaces.Book[]{
    let books= [
    {id:1,title:'Biology',author:'John',available:false,category:Category.Course},
    {id:2,title:'BioGraphy1',author:'Neha',available:true,category:Category.Biography},
    {id:3,title:'BioGraphy2',author:'John',available:true,category:Category.Biography}];
    return books;
}

function LogFirstAvailable(books=GetAllBooks()): void{
    let numOfBooks: number = books.length;
    let firstAvail:string ='';
    for(let book of books) {
        if(book.available) 
        firstAvail = book.title;
    }
    console.log('Number of Books ' + numOfBooks);
    console.log('First Available ' + firstAvail);

}

//defining default category
function GetBooksByCategory(categoryFilter:Category=Category.Biography):Array<string> {

    console.log('Category Passed: ' + categoryFilter);
    const allBooks = GetAllBooks();
    const filtered:string[] =[];

    for(let book of allBooks){
        if(book.category==categoryFilter){
            filtered.push(book.title);
        }
    }
    return filtered;
}

function LogBookTitles(titles:string[]){

    for(let titleBook of titles){
        console.log(titleBook);
    }
}
function GetBookById(id:Number): intefaces.Book{
    const allBooks = GetAllBooks();
    return allBooks.filter((book)=>book.id==id)[0];
}
//Function Types
function CreateCustomerID(name:string,id:Number):string{
    return name + id;
}

let IDGenerator :(str:string,num:Number)=>string;
IDGenerator =CreateCustomerID;

let myID :string = IDGenerator('Neha',123);
console.log(myID);
const biographyBooks = GetBooksByCategory(Category.Biography);
biographyBooks.forEach((val,id,arr)=>console.log(++id +'-' +val));


//Paranmeter Optional
function CreateCustomer(name:string,age?:number,city?:string){
    console.log('Creating Customer' + name);
    if(age){
        console.log('Age ' + age);
    }
    if(city){
        console.log('City ' + city);
    }
}

CreateCustomer('John');
CreateCustomer('John',19);
//calling without params
LogFirstAvailable();

//Variable Number of params Rest params
function CheckoutBooks(customer:string,...bookIDs:number[]):string[]{

    let checkoutBooks:string[] =[];

    for (const id of bookIDs) {
        let book = GetBookById(id);
        checkoutBooks.push(book.title);
    }
    return checkoutBooks;
}

let myBooks = CheckoutBooks('Neha',1,2);
myBooks.forEach((title)=> console.log(title));


//funtion overloads
function GetTitles(author:string):string[];
function GetTitles(available:boolean):string[];
function GetTitles(bookProp:any):string[]{
    const allBooks = GetAllBooks();
    let foundTitles:string[] =[];
    if(typeof bookProp=='string'){
        for (let book of allBooks) {
            if(book.author==bookProp) foundTitles.push(book.title);
        }
    }
    if(typeof bookProp=='boolean'){
        for (let book of allBooks) {
            if(book.available==bookProp) foundTitles.push(book.title);
        }
    }

    return foundTitles;
}

let titles = GetTitles('John');
titles.forEach((title)=>console.log(title));

let book = {
    id:123,
    title:'ring',
    author:'Neha',
    available:false,
    category:Category.Childres,
    markDamaged:(reason:string)=> console.log('Damaged' + reason)
}

function PrintBook(book:intefaces.Book){
    console.log(book.title +  ' by ' + book.author)
}
PrintBook(book);
book.markDamaged('Missing Pages');

//class invocation
let lib = new UniversityLib();
lib.name = 'Amit';
lib.assistCustomer('Neha');

//Class
// let ref = new ReferenceItem();
// ref.title ='My Uniqe Book';
// ref.year =1990;
// ref.printItem();

//Inheritance
let refSub = new refBook();
refSub.title =' I am Sub class';
refSub.year =2000;
refSub.edition=10;
refSub.printItem();