<script lang="ts">
	import { browser } from '$app/environment';
	import {
		SYSTEM_THEME,
		LIGHT_THEME,
		DARK_THEME,
		pokemonTypes,
		pokemonTypesList
	} from '$lib/constants';
	import { currPokemonType } from '$lib/stores';
	import type { ChangeEventHandler } from 'svelte/elements';
	import { capitalizeFirstLetter } from '../../utils/helpers';

	let darkMode: boolean = false;
	let selectedTheme: string = SYSTEM_THEME;
	let selectedPokemonTheme: string = $currPokemonType.name;

	if (browser) {
		if (localStorage.theme && localStorage.theme !== '') {
			selectedTheme = localStorage.theme;
		}
	}

	const handleSwitchDarkMode: ChangeEventHandler<HTMLSelectElement> = (e: Event) => {
		if ((e.target as HTMLOptionElement).value === SYSTEM_THEME) {
			localStorage.removeItem('theme');
			if (window.matchMedia(`(prefers-color-scheme: ${DARK_THEME})`).matches) {
				document.documentElement.classList.add(DARK_THEME);
				darkMode = true;
			} else {
				document.documentElement.classList.remove(DARK_THEME);
				darkMode = false;
			}
			return;
		}

		if ((e.target as HTMLOptionElement).value === 'light') {
			document.documentElement.classList.remove(DARK_THEME);
			if (browser) {
				localStorage.setItem('theme', LIGHT_THEME);
			}
		}

		if ((e.target as HTMLOptionElement).value === DARK_THEME) {
			document.documentElement.classList.add(DARK_THEME);
			if (browser) {
				localStorage.setItem('theme', DARK_THEME);
			}
		}
	};

	const handleSwitchPokemonTheme: ChangeEventHandler<HTMLSelectElement> = (e: Event) => {
		const currTypeLabel = (e.target as HTMLOptionElement).value;
		$currPokemonType = structuredClone(pokemonTypes[currTypeLabel]);
		selectedPokemonTheme = $currPokemonType.name;
	};
</script>

<div class="flex flex-row gap-4">
	<select bind:value={selectedTheme} on:change={(e) => handleSwitchDarkMode(e)}>
		<option value={SYSTEM_THEME}>{capitalizeFirstLetter(SYSTEM_THEME)}</option>
		<option value={LIGHT_THEME}>{capitalizeFirstLetter(LIGHT_THEME)}</option>
		<option value={DARK_THEME}>{capitalizeFirstLetter(DARK_THEME)}</option>
	</select>

	<select bind:value={selectedPokemonTheme} on:change={(e) => handleSwitchPokemonTheme(e)}>
		{#each pokemonTypesList as pokemonType}
			<option value={pokemonType.name}>{pokemonType.displayName}</option>
		{/each}
	</select>
</div>
