<script>
	export let typeName;
	export let primaryColor;
	export let secondaryColor;
</script>

<div class="flex flex-row gap-4 justify-between">
	<div class={`px-2 py-1 rounded ${primaryColor}`}>{typeName} Primary</div>
	<div class={`px-2 py-1 rounded ${secondaryColor}`}>{typeName} Secondary</div>
</div>
