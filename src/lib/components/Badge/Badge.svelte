<script lang="ts">
	export let badgeText: string = '';
	export let text: string = '';
	export let border: string = '';
	export let dot: string = '';
	export let bg: string = '';
	export let styleType: string = '';

	const styles: { [key: string]: string } = {
		default: `text-white ${bg}`,
		dot: `bg-white border border-solid border-gray-200`,
		border: `${text} ${border}`
	};
</script>

<div class={`flex flex-row items-center gap-1 px-2 py-0.5 w-fit rounded-full ${styles[styleType]}`}>
	{#if dot !== ''}
		<div class={`w-2 h-2 mr-0.5 rounded-full -scale-75 ${dot}`}></div>
	{/if}
	<div class={`note font-medium`}>{badgeText}</div>
</div>
