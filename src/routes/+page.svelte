<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button/Button.svelte';
	import { currPokemonType } from '$lib/stores';

	const handleEnterClick = () => {
		goto('/home');
	};
</script>

<div class="flex flex-row w-full h-screen justify-center items-center">
	<div class="px-4 py-5 rounded-xl {$currPokemonType.styles.bg.secondaryColor}">
		<Button
			buttonText={'Enter'}
			classValues={`title enter-btn border-solid boder-2 border-white rounded-xl text-4xl text-white py-2 px-20 
				${$currPokemonType.styles.bg.primaryColor} ${$currPokemonType.styles.bg.primaryHoverColor}`}
			onClick={handleEnterClick}
		/>
	</div>
</div>

<style>
	.enter-btn {
		@apply border-solid border-2 border-white rounded-xl;
		@apply text-4xl text-white;
		@apply py-0 px-20;
	}
</style>
