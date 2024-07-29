export type PokemonTypeListItem = {
	name: string;
	displayName: string;
	primaryColor: {
		twLevel: string;
		bg: string;
	};
	secondaryColor: {
		twLevel: string;
		bg: string;
	};
};

export type PokemonTypes = {
	[key: string]: {
		name: string;
		displayName: string;
		primaryColor: {
			twLevel: string;
			bg: string;
		};
		secondaryColor: {
			twLevel: string;
			bg: string;
		};
	};
};
