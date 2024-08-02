<script>
	import { currPokemonType } from '$lib/stores';
</script>

<article class="flex flex-col gap-6 p-4 rounded-lg style-card">
	<span class="text-xl font-medium">Label Inputs</span>

	<div class="flex flex-row gap-2 items-center">
		<label for="name">Name:</label>
		<input
			id="name"
			type="text"
			class={`input-text ${$currPokemonType.styles.accent.primaryColor} ${$currPokemonType.styles.ring.primaryFocusColor}`}
		/>
	</div>

	<div class="flex flex-row gap-2 items-center">
		<label for="starter">Starter:</label>
		<input
			id="starter"
			type="text"
			class={`input-text ${$currPokemonType.styles.accent.primaryColor} ${$currPokemonType.styles.ring.primaryFocusColor}`}
		/>
	</div>

	<div class="flex flex-col gap-2">
		<span>Starter Type</span>
		<div class="flex flex-row items-center justify-between px-2">
			<div>
				<input
					id="fire"
					name="type"
					type="radio"
					class={`${$currPokemonType.styles.accent.primaryColor}`}
				/>
				<label for="fire">Fire</label>
			</div>

			<div>
				<input
					id="water"
					name="type"
					type="radio"
					class={`${$currPokemonType.styles.accent.primaryColor}`}
				/>
				<label for="water">Water</label>
			</div>

			<div>
				<input
					id="grass"
					name="type"
					type="radio"
					class={`${$currPokemonType.styles.accent.primaryColor}`}
				/>
				<label for="grass">Grass</label>
			</div>
		</div>
	</div>

	<div class="flex flex-col gap-2">
		<span>Generation</span>
		<div class="flex flex-col gap-1 justify-center ml-2">
			<div>
				<input
					id="gen1"
					name="type"
					type="checkbox"
					class={`${$currPokemonType.styles.accent.primaryColor}`}
				/>
				<label for="gen1">Gen 1</label>
			</div>

			<div>
				<input
					id="gen2"
					name="type"
					type="checkbox"
					class={`${$currPokemonType.styles.accent.primaryColor}`}
				/>
				<label for="gen2">Gen 2</label>
			</div>

			<div>
				<input
					id="gen3"
					name="type"
					type="checkbox"
					class={`${$currPokemonType.styles.accent.primaryColor}`}
				/>
				<label for="gen3">Gen 3</label>
			</div>
		</div>
	</div>

	<div>
		<input
			id="scale"
			name="type"
			type="range"
			class={`${$currPokemonType.styles.accent.primaryColor}`}
		/>
		<label for="scale">Level</label>
	</div>
</article>
