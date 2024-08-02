<script>
	import { pokemonTypesList } from '$lib/constants';
	import { currPokemonType } from '$lib/stores';
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
			<span>{$currPokemonType.displayName}</span>
			<a class="btn" href="/">Exit</a>
			<a class="btn btn-outline" href="/">Exit Outline</a>
			<a
				class={`btn btn-primary ${$currPokemonType.styles.bg.primaryColor} ${$currPokemonType.styles.bg.primaryHoverColor}`}
				href="/">Exit Primary</a
			>
			<a
				class={`btn btn-outline ${$currPokemonType.styles.text.primaryColor} ${$currPokemonType.styles.border.primaryColor} ${$currPokemonType.styles.bg.primaryHoverColor}`}
				href="/">Exit Primary Outline</a
			>
			<a
				class={`btn btn-secondary ${$currPokemonType.styles.bg.secondaryColor} ${$currPokemonType.styles.bg.secondaryHoverColor}`}
				href="/">Exit Secondary</a
			>
			<a
				class={`btn btn-outline ${$currPokemonType.styles.text.secondaryColor} ${$currPokemonType.styles.border.secondaryColor} ${$currPokemonType.styles.bg.secondaryHoverColor}`}
				href="/">Exit Secondary Outline</a
			>
			<a class="btn btn-disabled" href="/">Exit Disabled</a>
		</div>
		<div class="flex flex-col gap-4 p-4 rounded-lg style-card">
			{#each pokemonTypesList as type}
				<PokemonType
					typeName={type.displayName}
					primaryColorBg={type.styles.bg.primaryColor}
					secondaryColorBg={type.styles.bg.secondaryColor}
				/>
			{/each}
		</div>
	</section>
</div>
