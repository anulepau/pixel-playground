import { readable, writable } from 'svelte/store';
import { FAIRY_TYPE } from './constants';

export const currPokemonType = writable(FAIRY_TYPE);
