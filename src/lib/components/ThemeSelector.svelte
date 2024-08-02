<script lang="ts">
	import { browser } from '$app/environment';
	import { pokemonTypes, pokemonTypesList } from '$lib/constants';
	import { currPokemonType } from '$lib/stores';
	import type { ChangeEventHandler } from 'svelte/elements';

	let darkMode: boolean = false;
	let selectedTheme: string = 'system';
	let selectedPokemonTheme: string = $currPokemonType.name;

	if (browser) {
		if (localStorage.theme && localStorage.theme !== '') {
			selectedTheme = localStorage.theme;
		}
	}

	const handleSwitchDarkMode: ChangeEventHandler<HTMLSelectElement> = (e: Event) => {
		if ((e.target as HTMLOptionElement).value === 'system') {
			localStorage.removeItem('theme');
			if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
				document.documentElement.classList.add('dark');
				darkMode = true;
			} else {
				document.documentElement.classList.remove('dark');
				darkMode = false;
			}
			return;
		}

		if ((e.target as HTMLOptionElement).value === 'light') {
			document.documentElement.classList.remove('dark');
			if (browser) {
				localStorage.setItem('theme', 'light');
			}
		}

		if ((e.target as HTMLOptionElement).value === 'dark') {
			document.documentElement.classList.add('dark');
			if (browser) {
				localStorage.setItem('theme', 'dark');
			}
		}
	};

	const handleSwitchPokemonTheme: ChangeEventHandler<HTMLSelectElement> = (e: Event) => {
		const currTypeLabel = (e.target as HTMLOptionElement).value;
		$currPokemonType = structuredClone(pokemonTypes[currTypeLabel]);
		selectedTheme = $currPokemonType.name;
	};
</script>

<div class="flex flex-row gap-4">
	<select bind:value={selectedTheme} on:change={(e) => handleSwitchDarkMode(e)}>
		<option value="system">System</option>
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>

	<select bind:value={selectedPokemonTheme} on:change={(e) => handleSwitchPokemonTheme(e)}>
		{#each pokemonTypesList as pokemonType}
			<option value={pokemonType.name}>{pokemonType.displayName}</option>
		{/each}
	</select>
</div>
