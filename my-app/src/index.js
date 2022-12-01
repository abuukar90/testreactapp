import React from 'react';
import ReactDom from 'react-dom';
import "./index.css";
function BookList(){
  return( 
<section>
  <Book/>
  <Book/>
  <Book/>
</section>
  );
}

function Book(){
  return (
    <article> 
<Image/>
<Title/>
<Autor/>
   </article>
   
            
  );
}

function Image(){
  return(
    <img src= "https://cdn.elearningindustry.com/wp-content/uploads/2016/05/top-10-books-every-college-student-read-1024x640.jpeg" alt=""/>
  );
}

function Title (){
return(
<h1> i love books</h1>
);
}

function Autor (){
  return(
<h4> Abuukar</h4>
  );
}

// const Greeting = () => {
//   return React.createElement('h1', {}, 'hello world');
// };
ReactDom.render(<BookList  />,  document.getElementById('root'));
//ReactDom.render(<Person />, document.getElementById('root'));