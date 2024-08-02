import { readable, writable } from 'svelte/store';
import { UNSELECTED_TYPE } from './constants';

export const currPokemonType = writable(UNSELECTED_TYPE);
