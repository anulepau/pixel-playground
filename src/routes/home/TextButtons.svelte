<script>
	import { currPokemonType } from '$lib/stores';
</script>

<article class="flex flex-col gap-4 p-4 rounded-lg style-card">
	<span class="text-xl font-medium">Text</span>
	<span class="text-xs">(xs) Note</span>
	<span class="text-sm">(sm) Labels</span>
	<span class="text-base">(base) Default</span>
	<span class="text-xl">(xl) Subheadings</span>
	<span class="text-2xl">(2xl) Headings</span>

	<hr />

	<span class="text-xl font-medium">Buttons</span>
	<span>{$currPokemonType.displayName}</span>
	<a class="btn" href="/">Exit</a>
	<a class="btn btn-outline" href="/">Exit Outline</a>
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
</article>
