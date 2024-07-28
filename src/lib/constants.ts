import { capitalizeFirstLetter } from '../utils/helpers';

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
	DRAGON,
	STEEL,
	ICE,
	FAIRY
];

export const displayTypesList: string[] = typesList.map((type) => capitalizeFirstLetter(type));

export const typesTheme = [
	{
		name: NORMAL,
		color: ''
	},
	{
		name: FIRE,
		color: ''
	},
	{
		name: WATER,
		color: ''
	},
	{
		name: FLYING,
		color: ''
	},
	{
		name: BUG,
		color: ''
	},
	{
		name: ELECTRIC,
		color: ''
	},
	{
		name: ROCK,
		color: ''
	},
	{
		name: GROUND,
		color: ''
	},
	{
		name: FIGHTING,
		color: ''
	},
	{
		name: PSYCHIC,
		color: ''
	},
	{
		name: DRAGON,
		color: ''
	},
	{
		name: STEEL,
		color: ''
	},
	{
		name: ICE,
		color: ''
	},
	{
		name: FAIRY,
		color: ''
	}
];
