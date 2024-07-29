<script lang="ts">
	export let typeName: string;
	export let primaryColorBg: string;
	export let secondaryColorBg: string;
</script>

<div class="flex flex-row gap-4 justify-between">
	<div class={`px-2 py-1 rounded ${primaryColorBg} text-white`}>{typeName} Primary</div>
	<div class={`px-2 py-1 rounded ${secondaryColorBg} text-white`}>{typeName} Secondary</div>
</div>
