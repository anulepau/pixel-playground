<script lang="ts">
	import { browser } from '$app/environment';
	import { DARK_THEME } from '$lib/constants';
	import '../styles/app.css';

	if (browser) {
		if (
			localStorage.theme === DARK_THEME ||
			(!('theme' in localStorage) &&
				window.matchMedia(`(prefers-color-scheme: DARK_THEME)`).matches)
		) {
			document.documentElement.classList.add(DARK_THEME);
		} else {
			document.documentElement.classList.remove(DARK_THEME);
		}
	}
</script>

<slot />
