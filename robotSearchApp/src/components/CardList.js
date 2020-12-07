import React from 'react';
import Card from '../components/Card';

//destructoring and passing in robots since it receives it on the index file
const CardList = ({ robots }) => {
    //robots loop - each robot gets a user and then returns a card component. We can use i since its the second parameter
    //adding a key since react won't know which card is which
    return (
        //we want to do a loop over the robots and create a card component for each one
        <div>
            {
                robots.map((user, i) => {
                    return (
                        <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                        />
                    );
                })
            }
        </div>
    );
}

export default CardList;