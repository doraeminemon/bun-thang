<script>
	import CashIcon from '$lib/assets/icons/cash-icon.svelte';
	import AtIcon from '$lib/assets/icons/at-icon.svelte';
</script>
<footer class="flex flex-col">
  <a href="mailto:dodinhthyson@gmail.com" rel="me"><AtIcon />Đỗ Đình Thy Sơn</a>
  <a href="/hom-cong-duc">
		<CashIcon />
		 Hòm công đức
	</a>
</footer>
<style lang="postcss">
	@reference "tailwindcss";

	footer {
		@apply sticky bottom-0 left-0 w-full bg-white px-4 py-4;
	}

	@media (prefers-color-scheme: dark) {
		footer {
			@apply bg-blue-950;
		}
	}
</style>