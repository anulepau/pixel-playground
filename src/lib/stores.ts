import { readable, writable } from 'svelte/store';
import { DEFAULT_TYPE } from './constants';

export const currPokemonType = writable(DEFAULT_TYPE);
