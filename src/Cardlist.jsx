import React from 'react'
import Card from './Card'

const CardList = ({ pokemon }) => {
    const cardsArray = pokemon.map((user, i) => {
        return (
        <Card key = {i} 
        id = { pokemon [i].id} 
        name = {pokemon[i].name} 
        email = {pokemon[i].email } />
        );
    })
    return (
        <div>
            {cardsArray}
        </div>
    );
}

export default CardList;