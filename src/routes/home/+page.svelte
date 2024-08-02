<script>
	import { pokemonTypesList } from '$lib/constants';
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
	import PokemonType from '$lib/components/PokemonType.svelte';
	import TextButtons from './TextButtons.svelte';
	import LabelInputs from './LabelInputs.svelte';
</script>

<div class="flex flex-col gap-4 p-4">
	<section class="flex flex-row gap-4 items-end">
		<span class="text-2xl font-medium">Style Guide</span>
		<ThemeSelector />
	</section>
	<section class="flex flex-row gap-4">
		<TextButtons />
		<LabelInputs />
		<div class="flex flex-col gap-4 p-4 rounded-lg style-card">
			<span class="text-xl font-medium">Theme Colors</span>
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
