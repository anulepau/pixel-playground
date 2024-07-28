import { capitalizeFirstLetter } from '../utils/helpers';
import type { TypesTable, PokemonType } from '../types';

// Types
export const NORMAL = 'normal';
export const FIRE = 'fire';
export const WATER = 'water';
export const GRASS = 'grass';
export const FLYING = 'flying';
export const BUG = 'bug';
export const ELECTRIC = 'electric';
export const ROCK = 'rock';
export const GROUND = 'ground';
export const FIGHTING = 'fighting';
export const PSYCHIC = 'psychic';
export const GHOST = 'ghost';
export const DARK = 'dark';
export const DRAGON = 'dragon';
export const STEEL = 'steel';
export const ICE = 'ice';
export const FAIRY = 'fairy';

export const typesList: string[] = [
	NORMAL,
	FIRE,
	WATER,
	FLYING,
	BUG,
	ELECTRIC,
	ROCK,
	GROUND,
	FIGHTING,
	PSYCHIC,
	GHOST,
	DARK,
	DRAGON,
	STEEL,
	ICE,
	FAIRY
];

export const typesTable: TypesTable = {
	NORMAL,
	FIRE,
	WATER,
	GRASS,
	FLYING,
	BUG,
	ELECTRIC,
	ROCK,
	GROUND,
	FIGHTING,
	PSYCHIC,
	GHOST,
	DARK,
	DRAGON,
	STEEL,
	ICE,
	FAIRY
};

export const types: PokemonType[] = [
	{
		name: NORMAL,
		displayName: capitalizeFirstLetter(NORMAL),
		primaryColor: 'bg-stone-400',
		secondaryColor: 'bg-gray-200'
	},
	{
		name: FIRE,
		displayName: capitalizeFirstLetter(FIRE),
		primaryColor: 'bg-red-600',
		secondaryColor: 'bg-orange-400'
	},
	{
		name: WATER,
		displayName: capitalizeFirstLetter(WATER),
		primaryColor: 'bg-cyan-500',
		secondaryColor: 'bg-teal-200'
	},
	{
		name: GRASS,
		displayName: capitalizeFirstLetter(GRASS),
		primaryColor: 'bg-green-500',
		secondaryColor: 'bg-rose-400'
	},
	{
		name: FLYING,
		displayName: capitalizeFirstLetter(FLYING),
		primaryColor: 'bg-sky-300',
		secondaryColor: 'bg-slate-400'
	},
	{
		name: BUG,
		displayName: capitalizeFirstLetter(BUG),
		primaryColor: 'bg-lime-300',
		secondaryColor: 'bg-yellow-500'
	},
	{
		name: ELECTRIC,
		displayName: capitalizeFirstLetter(ELECTRIC),
		primaryColor: 'bg-yellow-300',
		secondaryColor: 'bg-slate-600'
	},
	{
		name: ROCK,
		displayName: capitalizeFirstLetter(ROCK),
		primaryColor: 'bg-stone-600',
		secondaryColor: 'bg-lime-200'
	},
	{
		name: GROUND,
		displayName: capitalizeFirstLetter(GROUND),
		primaryColor: 'bg-yellow-600',
		secondaryColor: 'bg-stone-500'
	},
	{
		name: FIGHTING,
		displayName: capitalizeFirstLetter(FIGHTING),
		primaryColor: 'bg-amber-800',
		secondaryColor: 'bg-blue-200'
	},
	{
		name: PSYCHIC,
		displayName: capitalizeFirstLetter(PSYCHIC),
		primaryColor: 'bg-pink-600',
		secondaryColor: 'bg-purple-500'
	},
	{
		name: GHOST,
		displayName: capitalizeFirstLetter(GHOST),
		primaryColor: 'bg-violet-700',
		secondaryColor: 'bg-purple-400'
	},
	{
		name: DARK,
		displayName: capitalizeFirstLetter(DARK),
		primaryColor: 'bg-indigo-900',
		secondaryColor: 'bg-zinc-400'
	},
	{
		name: DRAGON,
		displayName: capitalizeFirstLetter(DRAGON),
		primaryColor: 'bg-indigo-500',
		secondaryColor: 'bg-indigo-300'
	},
	{
		name: STEEL,
		displayName: capitalizeFirstLetter(STEEL),
		primaryColor: 'bg-slate-400',
		secondaryColor: 'bg-blue-300'
	},
	{
		name: ICE,
		displayName: capitalizeFirstLetter(ICE),
		primaryColor: 'bg-blue-300',
		secondaryColor: 'bg-indigo-400'
	},
	{
		name: FAIRY,
		displayName: capitalizeFirstLetter(FAIRY),
		primaryColor: 'bg-pink-400',
		secondaryColor: 'bg-violet-400'
	}
];

export const displayTypesList: string[] = types.map((type) => type.displayName);
