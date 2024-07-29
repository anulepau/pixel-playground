<script lang="ts">
	import { pokemonTypesList } from '$lib/constants';
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
	import PokemonType from '$lib/components/PokemonType.svelte';
</script>

<div class="flex flex-col gap-4 p-4">
	<section class="flex flex-row gap-4 items-end">
		<span class="text-2xl font-semibold">Style Guide</span>
		<ThemeSelector />
	</section>
	<section class="flex flex-row gap-4">
		<div class="flex flex-col gap-4 p-4 rounded-lg style-card">
			<a class="btn" href="/">Exit</a>
			<a class="btn btn-outline" href="/">Exit Outline</a>
			<a class="btn btn-primary" href="/">Exit Primary</a>
			<a class="btn btn-primary-outline" href="/">Exit Primary Outline</a>
			<a class="btn btn-secondary" href="/">Exit Secondary</a>
			<a class="btn btn-secondary-outline" href="/">Exit Secondary Outline</a>
			<a class="btn btn-disabled" href="/">Exit Disabled</a>
		</div>
		<div class="flex flex-col gap-4 p-4 rounded-lg style-card">
			{#each pokemonTypesList as type}
				<PokemonType
					typeName={type.displayName}
					primaryColorBg={type.primaryColor.bg}
					secondaryColorBg={type.secondaryColor.bg}
				/>
			{/each}
		</div>
	</section>
</div>
