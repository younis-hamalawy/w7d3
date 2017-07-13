
export const selectAllPokemon = (state) => (
	Object.keys(state).map(id => state[id])
);
