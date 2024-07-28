<script lang="ts">
	export let typeName: string;
	export let primaryColor: string;
	export let secondaryColor: string;
</script>

<div class="flex flex-row gap-4 justify-between">
	<div class={`px-2 py-1 rounded ${primaryColor} text-white`}>{typeName} Primary</div>
	<div class={`px-2 py-1 rounded ${secondaryColor} text-white`}>{typeName} Secondary</div>
</div>