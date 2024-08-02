import { capitalizeFirstLetter } from '../utils/helpers';
import type { PokemonTypes, PokemonTypeListItem } from '../types';

// Themes
export const SYSTEM_THEME = 'system';
export const LIGHT_THEME = 'light';
export const DARK_THEME = 'dark';

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
export const UNSELECTED = 'unselected';

export const NORMAL_TYPE = {
	name: NORMAL,
	displayName: capitalizeFirstLetter(NORMAL),
	styles: {
		bg: {
			primaryColor: 'bg-stone-500',
			primaryHoverColor: 'hover:bg-stone-600',
			secondaryColor: 'bg-gray-400',
			secondaryHoverColor: 'hover:bg-gray-500'
		},
		text: {
			primaryColor: 'text-stone-500',
			primaryHoverColor: 'hover:text-stone-600',
			secondaryColor: 'text-gray-400',
			secondaryHoverColor: 'hover:text-gray-500'
		},
		border: {
			primaryColor: 'border-stone-500',
			primaryHoverColor: 'hover:bg-stone-500',
			secondaryColor: 'border-gray-400',
			secondaryHoverColor: 'hover:bg-gray-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-stone-500',
			secondaryFocusColor: 'focus:ring-gray-400'
		},
		accent: {
			primaryColor: 'accent-stone-500',
			secondaryColor: 'accent-gray-400'
		}
	}
};

export const FIRE_TYPE = {
	name: FIRE,
	displayName: capitalizeFirstLetter(FIRE),
	styles: {
		bg: {
			primaryColor: 'bg-red-600',
			primaryHoverColor: 'hover:bg-red-700',
			secondaryColor: 'bg-orange-400',
			secondaryHoverColor: 'hover:bg-orange-500'
		},
		text: {
			primaryColor: 'text-red-600',
			primaryHoverColor: 'hover:text-red-700',
			secondaryColor: 'text-orange-400',
			secondaryHoverColor: 'hover:text-orange-500'
		},
		border: {
			primaryColor: 'border-red-600',
			primaryHoverColor: 'hover:bg-red-600',
			secondaryColor: 'border-orange-400',
			secondaryHoverColor: 'hover:bg-orange-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-red-600',
			secondaryFocusColor: 'focus:ring-orange-400'
		},
		accent: {
			primaryColor: 'accent-red-600',
			secondaryColor: 'accent-orange-400'
		}
	}
};

export const WATER_TYPE = {
	name: WATER,
	displayName: capitalizeFirstLetter(WATER),
	styles: {
		bg: {
			primaryColor: 'bg-cyan-500',
			primaryHoverColor: 'hover:bg-cyan-600',
			secondaryColor: 'bg-teal-400',
			secondaryHoverColor: 'hover:teal-500'
		},
		text: {
			primaryColor: 'text-cyan-500',
			primaryHoverColor: 'hover:text-cyan-600',
			secondaryColor: 'text-teal-400',
			secondaryHoverColor: 'hover:text-teal-500'
		},
		border: {
			primaryColor: 'border-cyan-500',
			primaryHoverColor: 'hover:bg-cyan-500',
			secondaryColor: 'border-teal-400',
			secondaryHoverColor: 'hover:bg-teal-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-cyan-500',
			secondaryFocusColor: 'focus:ring-teal-400'
		},
		accent: {
			primaryColor: 'accent-cyan-500',
			secondaryColor: 'accent-teal-400'
		}
	}
};

export const GRASS_TYPE = {
	name: GRASS,
	displayName: capitalizeFirstLetter(GRASS),
	styles: {
		bg: {
			primaryColor: 'bg-green-500',
			primaryHoverColor: 'hover:bg-green-600',
			secondaryColor: 'bg-rose-400',
			secondaryHoverColor: 'hover:bg-rose-500'
		},
		text: {
			primaryColor: 'text-green-500',
			primaryHoverColor: 'hover:text-green-600',
			secondaryColor: 'text-rose-400',
			secondaryHoverColor: 'hover:text-rose-500'
		},
		border: {
			primaryColor: 'border-green-500',
			primaryHoverColor: 'hover:bg-green-500',
			secondaryColor: 'border-rose-400',
			secondaryHoverColor: 'hover:bg-rose-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-green-500',
			secondaryFocusColor: 'focus:ring-rose-400'
		},
		accent: {
			primaryColor: 'accent-green-500',
			secondaryColor: 'accent-rose-400'
		}
	}
};

export const FLYING_TYPE = {
	name: FLYING,
	displayName: capitalizeFirstLetter(FLYING),
	styles: {
		bg: {
			primaryColor: 'bg-sky-300',
			primaryHoverColor: 'hover:bg-sky-400',
			secondaryColor: 'bg-sky-500',
			secondaryHoverColor: 'hover:bg-sky-600'
		},
		text: {
			primaryColor: 'text-sky-300',
			primaryHoverColor: 'hover:text-sky-400',
			secondaryColor: 'text-sky-500',
			secondaryHoverColor: 'hover:text-sky-500'
		},
		border: {
			primaryColor: 'border-sky-300',
			primaryHoverColor: 'hover:bg-sky-300',
			secondaryColor: 'border-sky-500',
			secondaryHoverColor: 'hover:bg-sky-500'
		},
		ring: {
			primaryFocusColor: 'focus:ring-sky-300',
			secondaryFocusColor: 'focus:ring-sky-500'
		},
		accent: {
			primaryColor: 'accent-sky-300',
			secondaryColor: 'accent-sky-500'
		}
	}
};

export const BUG_TYPE = {
	name: BUG,
	displayName: capitalizeFirstLetter(BUG),
	styles: {
		bg: {
			primaryColor: 'bg-lime-400',
			primaryHoverColor: 'hover:bg-lime-500',
			secondaryColor: 'bg-yellow-500',
			secondaryHoverColor: 'hover:bg-yellow-600'
		},
		text: {
			primaryColor: 'text-lime-400',
			primaryHoverColor: 'hover:text-lime-500',
			secondaryColor: 'text-yellow-500',
			secondaryHoverColor: 'hover:text-yellow-600'
		},
		border: {
			primaryColor: 'border-lime-400',
			primaryHoverColor: 'hover:bg-lime-400',
			secondaryColor: 'border-yellow-500',
			secondaryHoverColor: 'hover:bg-yellow-500'
		},
		ring: {
			primaryFocusColor: 'focus:ring-lime-400',
			secondaryFocusColor: 'focus:ring-yellow-500'
		},
		accent: {
			primaryColor: 'accent-lime-400',
			secondaryColor: 'accent-yellow-500'
		}
	}
};

export const ELECTRIC_TYPE = {
	name: ELECTRIC,
	displayName: capitalizeFirstLetter(ELECTRIC),
	styles: {
		bg: {
			primaryColor: 'bg-yellow-400',
			primaryHoverColor: 'hover:bg-yellow-500',
			secondaryColor: 'bg-amber-400',
			secondaryHoverColor: 'hover:bg-amber-500'
		},
		text: {
			primaryColor: 'text-yellow-400',
			primaryHoverColor: 'hover:text-yellow-500',
			secondaryColor: 'text-amber-400',
			secondaryHoverColor: 'hover:text-amber-500'
		},
		border: {
			primaryColor: 'border-yellow-400',
			primaryHoverColor: 'hover:bg-yellow-400',
			secondaryColor: 'border-amber-400',
			secondaryHoverColor: 'hover:bg-amber-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-yellow-400',
			secondaryFocusColor: 'focus:ring-amber-400'
		},
		accent: {
			primaryColor: 'accent-yellow-400',
			secondaryColor: 'accent-amber-400'
		}
	}
};

export const ROCK_TYPE = {
	name: ROCK,
	displayName: capitalizeFirstLetter(ROCK),
	styles: {
		bg: {
			primaryColor: 'bg-stone-500',
			primaryHoverColor: 'hover:bg-stone-600',
			secondaryColor: 'bg-lime-600',
			secondaryHoverColor: 'hover:bg-lime-700'
		},
		text: {
			primaryColor: 'text-stone-500',
			primaryHoverColor: 'hover:text-stone-600',
			secondaryColor: 'text-lime-600',
			secondaryHoverColor: 'hover:text-lime-700'
		},
		border: {
			primaryColor: 'border-stone-500',
			primaryHoverColor: 'hover:bg-stone-500',
			secondaryColor: 'border-lime-600',
			secondaryHoverColor: 'hover:bg-lime-600'
		},
		ring: {
			primaryFocusColor: 'focus:ring-stone-500',
			secondaryFocusColor: 'focus:ring-lime-600'
		},
		accent: {
			primaryColor: 'accent-stone-500',
			secondaryColor: 'accent-lime-600'
		}
	}
};

export const GROUND_TYPE = {
	name: GROUND,
	displayName: capitalizeFirstLetter(GROUND),
	styles: {
		bg: {
			primaryColor: 'bg-yellow-600',
			primaryHoverColor: 'hover:bg-yellow-700',
			secondaryColor: 'bg-stone-400',
			secondaryHoverColor: 'hover:bg-stone-500'
		},
		text: {
			primaryColor: 'text-yellow-600',
			primaryHoverColor: 'hover:text-yellow-700',
			secondaryColor: 'text-stone-400',
			secondaryHoverColor: 'hover:text-stone-500'
		},
		border: {
			primaryColor: 'border-yellow-600',
			primaryHoverColor: 'hover:bg-yellow-600',
			secondaryColor: 'border-stone-400',
			secondaryHoverColor: 'hover:bg-stone-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-yellow-600',
			secondaryFocusColor: 'focus:ring-stone-400'
		},
		accent: {
			primaryColor: 'accent-yellow-600',
			secondaryColor: 'accent-stone-400'
		}
	}
};

export const FIGHTING_TYPE = {
	name: FIGHTING,
	displayName: capitalizeFirstLetter(FIGHTING),
	styles: {
		bg: {
			primaryColor: 'bg-amber-700',
			primaryHoverColor: 'hover:bg-amber-800',
			secondaryColor: 'bg-blue-600',
			secondaryHoverColor: 'hover:bg-blue-700'
		},
		text: {
			primaryColor: 'text-amber-700',
			primaryHoverColor: 'hover:text-amber-800',
			secondaryColor: 'text-blue-600',
			secondaryHoverColor: 'hover:text-blue-700'
		},
		border: {
			primaryColor: 'border-amber-700',
			primaryHoverColor: 'hover:bg-amber-700',
			secondaryColor: 'border-blue-600',
			secondaryHoverColor: 'hover:bg-blue-600'
		},
		ring: {
			primaryFocusColor: 'focus:ring-amber-700',
			secondaryFocusColor: 'focus:ring-blue-600'
		},
		accent: {
			primaryColor: 'accent-amber-700',
			secondaryColor: 'accent-blue-600'
		}
	}
};

export const PSYCHIC_TYPE = {
	name: PSYCHIC,
	displayName: capitalizeFirstLetter(PSYCHIC),
	styles: {
		bg: {
			primaryColor: 'bg-pink-600',
			primaryHoverColor: 'hover:bg-pink-700',
			secondaryColor: 'bg-fuchsia-400',
			secondaryHoverColor: 'hover:bg-fuchsia-500'
		},
		text: {
			primaryColor: 'text-pink-600',
			primaryHoverColor: 'hover:text-pink-700',
			secondaryColor: 'text-fuchsia-400',
			secondaryHoverColor: 'hover:text-fuchsia-500'
		},
		border: {
			primaryColor: 'border-pink-600',
			primaryHoverColor: 'hover:bg-pink-600',
			secondaryColor: 'border-fuchsia-400',
			secondaryHoverColor: 'hover:bg-fuchsia-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-pink-600',
			secondaryFocusColor: 'focus:ring-fuchsia-400'
		},
		accent: {
			primaryColor: 'accent-pink-600',
			secondaryColor: 'accent-fuchsia-400'
		}
	}
};

export const GHOST_TYPE = {
	name: GHOST,
	displayName: capitalizeFirstLetter(GHOST),
	styles: {
		bg: {
			primaryColor: 'bg-violet-700',
			primaryHoverColor: 'hover:bg-violet-800',
			secondaryColor: 'bg-purple-400',
			secondaryHoverColor: 'hover:bg-purple-500'
		},
		text: {
			primaryColor: 'text-violet-700',
			primaryHoverColor: 'hover:text-violet-800',
			secondaryColor: 'text-purple-400',
			secondaryHoverColor: 'hover:text-purple-500'
		},
		border: {
			primaryColor: 'border-violet-700',
			primaryHoverColor: 'hover:bg-violet-700',
			secondaryColor: 'border-purple-400',
			secondaryHoverColor: 'hover:bg-purple-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-violet-700',
			secondaryFocusColor: 'focus:ring-purple-400'
		},
		accent: {
			primaryColor: 'accent-violet-700',
			secondaryColor: 'accent-purple-400'
		}
	}
};

export const DARK_TYPE = {
	name: DARK,
	displayName: capitalizeFirstLetter(DARK),
	styles: {
		bg: {
			primaryColor: 'bg-indigo-700',
			primaryHoverColor: 'hover:bg-indigo-800',
			secondaryColor: 'bg-zinc-600',
			secondaryHoverColor: 'hover:bg-zinc-700'
		},
		text: {
			primaryColor: 'text-indigo-700',
			primaryHoverColor: 'hover:text-indigo-800',
			secondaryColor: 'text-zinc-600',
			secondaryHoverColor: 'hover:text-zinc-700'
		},
		border: {
			primaryColor: 'border-indigo-700',
			primaryHoverColor: 'hover:bg-indigo-700',
			secondaryColor: 'border-zinc-600',
			secondaryHoverColor: 'hover:bg-zinc-600'
		},
		ring: {
			primaryFocusColor: 'focus:ring-indigo-700',
			secondaryFocusColor: 'focus:ring-zinc-600'
		},
		accent: {
			primaryColor: 'accent-indigo-700',
			secondaryColor: 'accent-zinc-600'
		}
	}
};

export const DRAGON_TYPE = {
	name: DRAGON,
	displayName: capitalizeFirstLetter(DRAGON),
	styles: {
		bg: {
			primaryColor: 'bg-indigo-400',
			primaryHoverColor: 'hover:bg-indigo-500',
			secondaryColor: 'bg-orange-400',
			secondaryHoverColor: 'hover:bg-orange-500'
		},
		text: {
			primaryColor: 'text-indigo-400',
			primaryHoverColor: 'hover:text-indigo-500',
			secondaryColor: 'text-orange-400',
			secondaryHoverColor: 'hover:text-orange-500'
		},
		border: {
			primaryColor: 'border-indigo-400',
			primaryHoverColor: 'hover:bg-indigo-400',
			secondaryColor: 'border-orange-400',
			secondaryHoverColor: 'hover:bg-orange-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-indigo-400',
			secondaryFocusColor: 'focus:ring-orange-400'
		},
		accent: {
			primaryColor: 'accent-indigo-400',
			secondaryColor: 'accent-orange-400'
		}
	}
};

export const STEEL_TYPE = {
	name: STEEL,
	displayName: capitalizeFirstLetter(STEEL),
	styles: {
		bg: {
			primaryColor: 'bg-slate-500',
			primaryHoverColor: 'hover:bg-slate-600',
			secondaryColor: 'bg-blue-400',
			secondaryHoverColor: 'hover:bg-blue-500'
		},
		text: {
			primaryColor: 'text-slate-500',
			primaryHoverColor: 'hover:text-slate-600',
			secondaryColor: 'text-blue-400',
			secondaryHoverColor: 'hover:text-blue-500'
		},
		border: {
			primaryColor: 'border-slate-500',
			primaryHoverColor: 'hover:bg-slate-500',
			secondaryColor: 'border-blue-400',
			secondaryHoverColor: 'hover:bg-blue-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-slate-500',
			secondaryFocusColor: 'focus:ring-blue-400'
		},
		accent: {
			primaryColor: 'accent-slate-500',
			secondaryColor: 'accent-blue-400'
		}
	}
};

export const ICE_TYPE = {
	name: ICE,
	displayName: capitalizeFirstLetter(ICE),
	styles: {
		bg: {
			primaryColor: 'bg-blue-300',
			primaryHoverColor: 'hover:bg-blue-400',
			secondaryColor: 'bg-indigo-500',
			secondaryHoverColor: 'hover:bg-indigo-600'
		},
		text: {
			primaryColor: 'text-blue-300',
			primaryHoverColor: 'hover:text-blue-400',
			secondaryColor: 'text-indigo-500',
			secondaryHoverColor: 'hover:text-indigo-600'
		},
		border: {
			primaryColor: 'border-blue-300',
			primaryHoverColor: 'hover:bg-blue-300',
			secondaryColor: 'border-indigo-500',
			secondaryHoverColor: 'hover:bg-indigo-500'
		},
		ring: {
			primaryFocusColor: 'focus:ring-blue-300',
			secondaryFocusColor: 'focus:ring-indigo-500'
		},
		accent: {
			primaryColor: 'accent-blue-300',
			secondaryColor: 'accent-indigo-500'
		}
	}
};

export const FAIRY_TYPE = {
	name: FAIRY,
	displayName: capitalizeFirstLetter(FAIRY),
	styles: {
		bg: {
			primaryColor: 'bg-pink-400',
			primaryHoverColor: 'hover:bg-pink-500',
			secondaryColor: 'bg-violet-400',
			secondaryHoverColor: 'hover:bg-violet-500'
		},
		text: {
			primaryColor: 'text-pink-400',
			primaryHoverColor: 'hover:text-pink-500',
			secondaryColor: 'text-violet-400',
			secondaryHoverColor: 'hover:text-violet-500'
		},
		border: {
			primaryColor: 'border-pink-400',
			primaryHoverColor: 'hover:bg-pink-400',
			secondaryColor: 'border-violet-400',
			secondaryHoverColor: 'hover:bg-violet-400'
		},
		ring: {
			primaryFocusColor: 'focus:ring-pink-400',
			secondaryFocusColor: 'focus:ring-violet-400'
		},
		accent: {
			primaryColor: 'accent-pink-400',
			secondaryColor: 'accent-violet-400'
		}
	}
};

export const UNSELECTED_TYPE = {
	name: UNSELECTED,
	displayName: capitalizeFirstLetter(UNSELECTED),
	styles: {
		bg: {
			primaryColor: 'bg-red-500',
			primaryHoverColor: 'hover:bg-lime-500',
			secondaryColor: 'bg-yellow-400',
			secondaryHoverColor: 'hover:bg-orange-500'
		},
		text: {
			primaryColor: 'text-lime-500',
			primaryHoverColor: 'hover:text-lime-600',
			secondaryColor: 'text-orange-500',
			secondaryHoverColor: 'hover:text-orange-600'
		},
		border: {
			primaryColor: 'border-lime-500',
			primaryHoverColor: 'hover:bg-lime-500',
			secondaryColor: 'border-orange-500',
			secondaryHoverColor: 'hover:bg-orange-500'
		},
		ring: {
			primaryFocusColor: 'focus:ring-red-500',
			secondaryFocusColor: 'focus:ring-yellow-400'
		},
		accent: {
			primaryColor: 'accent-lime-500',
			secondaryColor: 'accent-orange-500'
		}
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
	fairy: FAIRY_TYPE,
	unselected: UNSELECTED_TYPE
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
	FAIRY_TYPE,
	UNSELECTED_TYPE
];
