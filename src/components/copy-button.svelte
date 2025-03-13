<script lang="ts">
  let { content } = $props();
  import CopyIcon from '$lib/assets/icons/copy-icon.svelte';
	import CopiedIcon from '$lib/assets/icons/copied-icon.svelte';
  let isCopied = $state(false);
  function copyAddress() {
    navigator.clipboard.writeText(content);
    isCopied = true;
    setTimeout(() => {
      isCopied = false
    }, 500)
  }
</script>
<button class="inline" onclick={copyAddress}>
  {#if isCopied}
    <CopyIcon />
  {:else}
    <CopiedIcon/>
  {/if}
</button>
<style lang="postcss">
  @reference "../styles/app.css";

  button {
		@apply inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white p-2 text-center text-sm font-medium text-gray-800 shadow-2xs hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700;
	}
</style>