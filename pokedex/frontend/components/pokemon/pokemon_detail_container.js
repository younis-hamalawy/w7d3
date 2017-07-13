import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectSinglePokemon } from '../../reducers/selectors';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = state => ({
  pokemon: selectSinglePokemon(state)
});


const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PokemonDetail));
