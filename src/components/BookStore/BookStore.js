import React from 'react';
import './BookStore.css'

const BookStore = (props) => {

    const {booksName,picture, store, writerNames, price, language}=props.book;
   
    return (
        <div className="col">
            <div className="card h-100 ">
              <img src={picture} className="card-img-top" alt="" />
                <div className="card-body card-body bg-light">
                    <h5 className="card-title text-success">Tittle : {booksName}</h5>
                    <p>Author Name : {writerNames}</p>
                    <p>Price  : {price}</p>
                    <p>Language: {language}</p>
                    <p>Stock: {store}</p>
                    <button onClick={()=>props.handlebtn(props.book)} className="btn btn-primary btn-lg mb-2"><i className="fas fa-book-reader"></i> Add to Cart</button>
                    <div className='icon'>
                        <p><i className="fab fa-instagram fs-1"></i></p>
                        <p><i className="fab fa-viber fs-1"></i></p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default BookStore;