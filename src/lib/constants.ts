import { capitalizeFirstLetter } from '../utils/helpers';
import type { PokemonTypes, PokemonTypeListItem } from '../types';

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

export const NORMAL_TYPE = {
	name: NORMAL,
	displayName: capitalizeFirstLetter(NORMAL),
	primaryColor: {
		twLevel: 'stone-500',
		bg: 'bg-stone-500'
	},
	secondaryColor: {
		twLevel: 'gray-400',
		bg: 'bg-gray-400'
	}
};

export const FIRE_TYPE = {
	name: FIRE,
	displayName: capitalizeFirstLetter(FIRE),
	primaryColor: {
		twLevel: 'red-600',
		bg: 'bg-red-600'
	},
	secondaryColor: {
		twLevel: 'orange-400',
		bg: 'bg-orange-400'
	}
};

export const WATER_TYPE = {
	name: WATER,
	displayName: capitalizeFirstLetter(WATER),
	primaryColor: {
		twLevel: 'cyan-500',
		bg: 'bg-cyan-500'
	},
	secondaryColor: {
		twLevel: 'teal-400',
		bg: 'bg-teal-400'
	}
};

export const GRASS_TYPE = {
	name: GRASS,
	displayName: capitalizeFirstLetter(GRASS),
	primaryColor: {
		twLevel: 'green-500',
		bg: 'bg-green-500'
	},
	secondaryColor: {
		twLevel: 'rose-400',
		bg: 'bg-rose-400'
	}
};

export const FLYING_TYPE = {
	name: FLYING,
	displayName: capitalizeFirstLetter(FLYING),
	primaryColor: {
		twLevel: 'sky-300',
		bg: 'bg-sky-300'
	},
	secondaryColor: {
		twLevel: 'sky-500',
		bg: 'bg-sky-500'
	}
};

export const BUG_TYPE = {
	name: BUG,
	displayName: capitalizeFirstLetter(BUG),
	primaryColor: {
		twLevel: 'lime-400',
		bg: 'bg-lime-400'
	},
	secondaryColor: {
		twLevel: 'yellow-500',
		bg: 'bg-yellow-500'
	}
};

export const ELECTRIC_TYPE = {
	name: ELECTRIC,
	displayName: capitalizeFirstLetter(ELECTRIC),
	primaryColor: {
		twLevel: 'yellow-500',
		bg: 'bg-yellow-500'
	},
	secondaryColor: {
		twLevel: 'amber-400',
		bg: 'bg-amber-400'
	}
};

export const ROCK_TYPE = {
	name: ROCK,
	displayName: capitalizeFirstLetter(ROCK),
	primaryColor: {
		twLevel: 'stone-500',
		bg: 'bg-stone-500'
	},
	secondaryColor: {
		twLevel: 'lime-600',
		bg: 'bg-lime-600'
	}
};

export const GROUND_TYPE = {
	name: GROUND,
	displayName: capitalizeFirstLetter(GROUND),
	primaryColor: {
		twLevel: 'yellow-600',
		bg: 'bg-yellow-600'
	},
	secondaryColor: {
		twLevel: 'stone-400',
		bg: 'bg-stone-400'
	}
};

export const FIGHTING_TYPE = {
	name: FIGHTING,
	displayName: capitalizeFirstLetter(FIGHTING),
	primaryColor: {
		twLevel: 'amber-700',
		bg: 'bg-amber-700'
	},
	secondaryColor: {
		twLevel: 'blue-600',
		bg: 'bg-blue-600'
	}
};

export const PSYCHIC_TYPE = {
	name: PSYCHIC,
	displayName: capitalizeFirstLetter(PSYCHIC),
	primaryColor: {
		twLevel: 'pink-600',
		bg: 'bg-pink-600'
	},
	secondaryColor: {
		twLevel: 'fuchsia-400',
		bg: 'bg-fuchsia-400'
	}
};

export const GHOST_TYPE = {
	name: GHOST,
	displayName: capitalizeFirstLetter(GHOST),
	primaryColor: {
		twLevel: 'violet-700',
		bg: 'bg-violet-700'
	},
	secondaryColor: {
		twLevel: 'purple-400',
		bg: 'bg-purple-400'
	}
};

export const DARK_TYPE = {
	name: DARK,
	displayName: capitalizeFirstLetter(DARK),
	primaryColor: {
		twLevel: 'indigo-700',
		bg: 'bg-indigo-700'
	},
	secondaryColor: {
		twLevel: 'zinc-600',
		bg: 'bg-zinc-600'
	}
};

export const DRAGON_TYPE = {
	name: DRAGON,
	displayName: capitalizeFirstLetter(DRAGON),
	primaryColor: {
		twLevel: 'indigo-400',
		bg: 'bg-indigo-400'
	},
	secondaryColor: {
		twLevel: 'orange-400',
		bg: 'bg-orange-400'
	}
};

export const STEEL_TYPE = {
	name: STEEL,
	displayName: capitalizeFirstLetter(STEEL),
	primaryColor: {
		twLevel: 'slate-500',
		bg: 'bg-slate-500'
	},
	secondaryColor: {
		twLevel: 'blue-400',
		bg: 'bg-blue-400'
	}
};

export const ICE_TYPE = {
	name: ICE,
	displayName: capitalizeFirstLetter(ICE),
	primaryColor: {
		twLevel: 'blue-300',
		bg: 'bg-blue-300'
	},
	secondaryColor: {
		twLevel: 'indigo-500',
		bg: 'bg-indigo-500'
	}
};

export const FAIRY_TYPE = {
	name: FAIRY,
	displayName: capitalizeFirstLetter(FAIRY),
	primaryColor: {
		twLevel: 'pink-400',
		bg: 'bg-pink-400'
	},
	secondaryColor: {
		twLevel: 'violet-400',
		bg: 'bg-violet-400'
	}
};

export const pokemonTypes: PokemonTypes = {
	normal: NORMAL_TYPE,
	fire: FIRE_TYPE,
	water: WATER_TYPE,
	grass: GRASS_TYPE,
	flying: FLYING_TYPE,
	bug: BUG_TYPE,
	electric: ELECTRIC_TYPE,
	rock: ROCK_TYPE,
	ground: GROUND_TYPE,
	fighting: FIGHTING_TYPE,
	psychic: PSYCHIC_TYPE,
	ghost: GHOST_TYPE,
	dark: DARK_TYPE,
	dragon: DRAGON_TYPE,
	steel: STEEL_TYPE,
	ice: ICE_TYPE,
	fairy: FAIRY_TYPE
};

export const pokemonTypesList: PokemonTypeListItem[] = [
	NORMAL_TYPE,
	FIRE_TYPE,
	GRASS_TYPE,
	WATER_TYPE,
	FLYING_TYPE,
	BUG_TYPE,
	ELECTRIC_TYPE,
	ROCK_TYPE,
	GROUND_TYPE,
	FIGHTING_TYPE,
	PSYCHIC_TYPE,
	GHOST_TYPE,
	DARK_TYPE,
	DRAGON_TYPE,
	STEEL_TYPE,
	ICE_TYPE,
	FAIRY_TYPE
];

export const displayTypesList: string[] = pokemonTypesList.map((type) => type.displayName);
