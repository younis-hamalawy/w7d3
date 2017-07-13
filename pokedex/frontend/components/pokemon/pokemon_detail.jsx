import React from 'react';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';


class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  // componentWillReceiveProps(newProps){
  //   if (this.match.params.pokemon.id !== newProps.match.params.pokemon.id){
  //     this.props.requestSinglePokemon(newProps.match.params.pokemon.id);
  //   }
  // }

  render() {
    const poke = this.props.pokemon.id;
    return(
      <div>
        <ul className="pokes">
           <PokemonIndexItem key={poke.id} poke={poke} />
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
