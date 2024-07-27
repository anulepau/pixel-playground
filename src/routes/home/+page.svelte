<script>
  import ThemeSwitch from "$lib/components/ThemeSwitch.svelte";
</script>

<div class="home">
  <span>hello world</span>
  <ThemeSwitch />
  <a class="exit-btn" href="/">Exit</a>
</div>

<style lang="scss">
  @import '../../styles/colors.scss';

  .home {
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
  }

  .exit-btn {
    background-color: $pp-pink-300;
    border: none;
    border-radius: 0.5rem;
    padding: 0.25rem 1.5rem;
    color: white;
    font-size: 18px;
    text-decoration: none;

    &:hover {
      transition: 0.2s;
      background-color: $pp-pink-100;
      cursor: pointer;
    }
  }
</style>
