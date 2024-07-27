<script lang="ts">
  import { theme } from "$lib/stores"
  import "../styles/app.scss";
</script>

<svelte:head>
  <meta name="color-scheme" content={$theme == 'system' ? 'light dark' : $theme}/>
  <link rel="stylesheet" href={`src/styles/theme/${$theme}.scss`} />
</svelte:head>

<slot />