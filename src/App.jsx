import React, { Component } from 'react'
import CardList from './Cardlist'
import SearchBox from './SearchBox'
import { pokemon } from './pokemon'




class App extends Component {
    constructor() {
        super()
        this.state = {
            pokemon: pokemon,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render () {
        const filteredPokemon = this.state.pokemon.filter(pokemon => {
            return pokemon.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 >Pokémon Friends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <CardList pokemon = { filteredPokemon} />
            </div>
        );
    }

}




export default App;
    