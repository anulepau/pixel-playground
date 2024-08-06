<script>
	import { currPokemonType } from '$lib/stores';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/Button/Button.svelte';

	const handleExitClick = () => {
		goto('/');
	};
</script>

<article class="flex flex-col gap-4 p-4 rounded-lg style-card">
	<span class="subheading">Buttons | Text</span>
	<Button buttonText={'Exit'} onClick={handleExitClick} />
	<Button
		buttonText={'Exit Outline'}
		classValues={`btn-outline-default`}
		onClick={handleExitClick}
	/>
	<Button
		buttonText={'Exit Primary'}
		classValues={`btn btn-primary 
      ${$currPokemonType.styles.bg.primaryColor} 
      ${$currPokemonType.styles.bg.primaryHoverColor}`}
		onClick={handleExitClick}
	/>
	<Button
		buttonText={'Exit Primary Outline'}
		classValues={`btn btn-outline
      ${$currPokemonType.styles.text.primaryColor} 
      ${$currPokemonType.styles.border.primaryColor} 
      ${$currPokemonType.styles.border.primaryHoverColor}`}
		onClick={handleExitClick}
	/>
	<Button
		buttonText={'Exit Primary'}
		classValues={`btn btn-secondary 
      ${$currPokemonType.styles.bg.secondaryColor} 
      ${$currPokemonType.styles.bg.secondaryHoverColor}`}
		onClick={handleExitClick}
	/>
	<Button
		buttonText={'Exit Secondary Outline'}
		classValues={`btn btn-outline 
      ${$currPokemonType.styles.text.secondaryColor} 
      ${$currPokemonType.styles.border.secondaryColor} 
      ${$currPokemonType.styles.border.secondaryHoverColor}`}
		onClick={handleExitClick}
	/>
	<Button buttonText={'Exit Disabled'} onClick={handleExitClick} disabled />

	<hr />

	<span class="note">Note</span>
	<span class="label">Label</span>
	<span>Default</span>
	<span class="subheading">Subheading</span>
	<span class="heading">Heading</span>
	<span class="title">Title</span>
</article>
