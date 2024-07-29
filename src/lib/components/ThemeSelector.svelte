<script lang="ts">
	import { browser } from '$app/environment';
	import { pokemonTypesList } from '$lib/constants';

	let darkMode: boolean = false;
	let selected: string = 'system';
	let type: string = 'Fairy';

	if (browser) {
		if (localStorage.theme && localStorage.theme !== '') {
			selected = localStorage.theme;
		}
	}

	function handleSwitchDarkMode(e: any) {
		if (e.target.value === 'system') {
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

		if (e.target.value === 'light') {
			document.documentElement.classList.remove('dark');
			if (browser) {
				localStorage.setItem('theme', 'light');
			}
		}

		if (e.target.value === 'dark') {
			document.documentElement.classList.add('dark');
			if (browser) {
				localStorage.setItem('theme', 'dark');
			}
		}
	}
</script>

<div class="flex flex-row gap-4">
	<select bind:value={selected} on:change={(e) => handleSwitchDarkMode(e)}>
		<option value="system">System</option>
		<option value="light">Light</option>
		<option value="dark">Dark</option>
	</select>

	<select bind:value={type}>
		{#each pokemonTypesList as pokemonType}
			<option value={pokemonType.displayName}>{pokemonType.displayName}</option>
		{/each}
	</select>
</div>
