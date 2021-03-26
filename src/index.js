////////////////////Basics////////////////////////

//in react, to specify that it is a component, Capitalize first letter
// function Greeting(){
//     return (
//     <div>
//         <Person /> {/*putting two and two together*/}
//         <p>This is my message</p>
//     </div>
//     );
// }

// const Person = () => <h1>Khushali</h1>;

/* the gotcha about the closing tags in react is simple. 
Even though html element might not have closing tags, eg: img,
you still need to self close it.
IfI pass it like <Greeting> then it will show an error.
Either to <Greeting></Greeting> or <Greeting/>
*/

// const Greeting= () =>{
//     return React.createElement('div',
// {},
// React.createElement('h1', {}, 'hello World'));
// };

//ReactDom.render(<Greeting/>, document.getElementById('root'));

/*stateless functional componenets: dumb components- doesnt have state
Alwyas return JSX, even if its an empty html
*/

/* JSX Rules
1)Always return a single element
Inside the return, you can do anything, even a website.
But there should be only one parent element
2)Follow regular html semantics.
You can enclose everything in a final <React.Fragment>
shortcut: <>.....</>
3)Html attributes should be in camelCase
Event listeners: for buttons etc, like onClick etc 
We cannot write class='' in JSX. We use className='' instead.
4)Close every element
psst: add parantheses after return
*/

//////////////////END OF TUTORIAL/////////////////

///////////////MINI BOOK PROJECT///////////////////

import React from "react";
import ReactDom from "react-dom";

import "./index.css";
//setup an array- books so that it can be iterated over
const books = [
  {
    img:
      "https://cdn.shopify.com/s/files/1/0432/6640/8598/products/51uzc4OoDQL_360x.jpg?v=1603409364",
    title: "The Moscow Puzzles: 359 Mathematic Recreations",
    author: "Boris A. Kordemsky",
  },

  {
    img:
      "https://cdn.shopify.com/s/files/1/0432/6640/8598/products/51ekZGmxSlL_360x.jpg?v=1603355317",
    title: "How to Lie with Statistics",
    author: "Darrell Huff",
  },

  {
    img:
      "https://cdn.shopify.com/s/files/1/0432/6640/8598/products/51P9Q3mcHeL_360x.jpg?v=1603418740",
    title: "The End of Everything: Astrophysically Speaking",
    author: "Katie Mack",
  },

  {
    img:
      "https://cdn.shopify.com/s/files/1/0432/6640/8598/products/41G0yuCA92L_360x.jpg?v=1603409283",
    title: "Humble Pi: A Comedy of Maths Errors",
    author: "Matt Parker",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {/*map iterates over every item in books, for book in books*/}
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book}></Book>;
        /*object as a prop*/
      })}
    </section>
  );
}
//setting up props
const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      <img src={img} alt=" " />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
