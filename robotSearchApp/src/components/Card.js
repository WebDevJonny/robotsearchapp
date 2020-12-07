import React from 'react'; //must be in scope when using JSX

const Card = ({ name, email, id }) => {
    //destructering 
    return (
        //This is JSX not HTML
        <div className='tc bg-light-green dib br3 ps3 ma2 grow bw2 shadow-5'>  
            <img alt='Robots' src={`https://robohash.org/${id}?200x200`} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;