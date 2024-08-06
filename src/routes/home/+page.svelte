<script>
	import { pokemonTypesList } from '$lib/constants';
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
	import PokemonType from '$lib/components/PokemonType.svelte';
	import ButtonsText from './ButtonsText.svelte';
	import LabelInputs from './LabelInputs.svelte';
</script>

<div class="flex flex-col gap-4 p-4">
	<section class="flex flex-row gap-4 items-center">
		<span class="heading">Style Guide</span>
		<ThemeSelector />
	</section>
	<section class="flex flex-row gap-4">
		<ButtonsText />
		<LabelInputs />
		<div class="flex flex-col gap-4 p-4 rounded-lg style-card">
			<span class="subheading">Theme Colors</span>
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
