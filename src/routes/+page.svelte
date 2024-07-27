<script>
</script>

<div class="welcome-page">
	<div class="enter-btn-bg">
		<a class="enter-btn" data-sveltekit-preload-data="tap" href="/home"> Enter </a>
	</div>
</div>

<style lang="scss">
	@import '../styles/colors.scss';

	.welcome-page {
		display: flex;
		width: 100%;
		height: 100vh;
		justify-content: center;
		align-items: center;
	}

	.enter-btn-bg {
		padding: 0.5rem;
		background-color: $pp-pink-100;
		width: fit-content;
		height: fit-content;
		border-radius: 1rem;
	}

	.enter-btn {
		background-color: $pp-pink-100;
		border: 2px solid white;
		border-radius: 1rem;
		padding: 0 5rem;
		color: white;
		font-size: 40px;
		text-decoration: none;

		&:hover {
			transition: 0.2s;
			background-color: $pp-pink-200;
			cursor: pointer;
		}
	}
</style>
