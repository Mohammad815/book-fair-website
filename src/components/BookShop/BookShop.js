import React, { useState } from 'react';
import { useEffect } from 'react';
import BookStore from '../BookStore/BookStore';
import TotalCost from '../Total/TotalCost';
import './BookShop.css'

const BookShop = () => {
    const [books,setBooks]=useState([]);
    const [addedbook, setAddedBooks]=useState([])

    useEffect(()=>{
        fetch('./books.JSON')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])

    const handlebtn = (book) => {
        const newbook = [...addedbook, book]
        setAddedBooks(newbook)
    }
    let total = 0;
    let name =''
    for(const book of addedbook){
        total = total + parseInt(book.price);
        name = name + book.booksName + ', ';
      
    }
   
    return (
        <div className='container'>
           <div className='leftSide'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                    books.map(book => <BookStore book={book} key={book.bookN0}
                    handlebtn={handlebtn}></BookStore>)
                    }
                </div>
           </div>
           <div className='writeSide'>
             <TotalCost addedbook={addedbook} total={total} name={name}></TotalCost>
           </div>
        </div>
    );
};

export default BookShop;