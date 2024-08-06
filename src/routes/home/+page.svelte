<script>
	import { pokemonTypesList } from '$lib/constants';
	import Badge from '$lib/components/Badge/Badge.svelte';
	import ThemeSelector from '$lib/components/ThemeSelector.svelte';
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
				<div class="flex flex-row gap-4 justify-between">
					<Badge
						badgeText={`${type.displayName} Primary`}
						text={`${type.styles.text.primaryColor}`}
						border={`border border-solid ${type.styles.border.primaryColor}`}
						dot={type.styles.bg.primaryColor}
						bg={type.styles.bg.primaryColor}
						styleType={'dot'}
					/>
					<Badge
						badgeText={`${type.displayName} Secondary`}
						text={`${type.styles.text.primaryColor}`}
						border={`border border-solid ${type.styles.border.primaryColor}`}
						dot={type.styles.bg.secondaryColor}
						bg={type.styles.bg.secondaryColor}
						styleType={'dot'}
					/>
				</div>
			{/each}
		</div>
	</section>
</div>
