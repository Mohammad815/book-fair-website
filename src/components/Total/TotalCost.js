import React from 'react';

const TotalCost = (props) => {
    console.log(props)
    return (
        <div>
             <h3>Book Added : {props.addedbook.length} </h3>

            <h3>Total Cost: ${props.total}</h3>
            
            <p>BooK Name : {props.name} </p>
        </div>
    );
};

export default TotalCost;
