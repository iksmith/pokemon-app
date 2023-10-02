import React from 'react';


const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className=' tc bg-light-white dib br3 ba pa3 ma2 bw1 shadow-5 grow'>
            {/* https://lorempokemon.fakerapi.it/ */}
            <img src={`https://lorempokemon.fakerapi.it/pokemon/200/${id}`} alt="Pokemon"/>
        <div className=''>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
    );
}

export default Card;