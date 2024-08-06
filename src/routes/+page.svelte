<script lang="ts">
	import { currPokemonType } from '$lib/stores';
</script>

<div class="flex flex-row w-full h-screen justify-center items-center">
	<div class="px-4 py-5 rounded-xl {$currPokemonType.styles.bg.secondaryColor}">
		<a
			class={`title enter-btn btn btn-primary ${$currPokemonType.styles.bg.primaryColor} ${$currPokemonType.styles.bg.primaryHoverColor}`}
			data-sveltekit-preload-data="tap"
			href="/home"
		>
			Enter
		</a>
	</div>
</div>

<style>
	.enter-btn {
		@apply border-solid border-2 border-white rounded-xl;
		@apply text-4xl text-white;
		@apply py-0 px-20;
	}
</style>
