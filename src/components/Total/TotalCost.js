import React from 'react';

const TotalCost = (props) => {
    console.log(props)
    return (
        <div>
             <h3>Book Added : {props.addedbook.length} </h3>

            <h3>Total Cost: ${props.total}</h3>
            
            <h5>Selected BooK Name : <span className='text-success'>{props.name}</span> </h5>
        </div>
    );
};

export default TotalCost;
