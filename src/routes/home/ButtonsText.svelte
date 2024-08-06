<script>
	import { currPokemonType } from '$lib/stores';
</script>

<article class="flex flex-col gap-4 p-4 rounded-lg style-card">
	<span class="subheading">Buttons | Text</span>
	<a class="btn" href="/">Exit</a>
	<a class="btn btn-outline-default" href="/">Exit Outline</a>
	<a
		class={`btn btn-primary 
      ${$currPokemonType.styles.bg.primaryColor} 
      ${$currPokemonType.styles.bg.primaryHoverColor}`}
		href="/">Exit Primary</a
	>
	<a
		class={`btn btn-outline
      ${$currPokemonType.styles.text.primaryColor} 
      ${$currPokemonType.styles.border.primaryColor} 
      ${$currPokemonType.styles.border.primaryHoverColor}`}
		href="/">Exit Primary Outline</a
	>
	<a
		class={`btn btn-secondary 
      ${$currPokemonType.styles.bg.secondaryColor} 
      ${$currPokemonType.styles.bg.secondaryHoverColor}`}
		href="/">Exit Secondary</a
	>
	<a
		class={`btn btn-outline 
      ${$currPokemonType.styles.text.secondaryColor} 
      ${$currPokemonType.styles.border.secondaryColor} 
      ${$currPokemonType.styles.border.secondaryHoverColor}`}
		href="/">Exit Secondary Outline</a
	>
	<a class="btn btn-disabled" href="/">Exit Disabled</a>

	<hr />

	<span class="note">Note</span>
	<span class="label">Labels</span>
	<span>Default</span>
	<span class="subheading">Subheading</span>
	<span class="heading">Heading</span>
	<span class="title">Title</span>
</article>
