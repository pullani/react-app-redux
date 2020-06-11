import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    return (
        <div>
        {
            robots.map((user , idx) => {
                //Unique and static key is required for each child in an iterator/array.
                //This will help react to keep track of each comonent.
                return (
                    <Card 
                    key={idx} 
                    id={robots[idx].id} 
                    name={robots[idx].name} 
                    email={robots[idx].email}
                    />
                );
            })
        }
        </div>
    );
}


export default CardList;