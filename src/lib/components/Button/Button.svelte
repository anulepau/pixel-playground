<script lang="ts">
	export let buttonText: string = '';
	export let classValues: string = '';
	export let onClick: () => void = () => {};
	export let disabled: boolean = false;
</script>

<button class={`btn ${classValues}`} on:click={onClick} {disabled}>
	{buttonText}
</button>
