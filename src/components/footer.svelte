<script>
	import CashIcon from '$lib/assets/icons/cash-icon.svelte';
	import AtIcon from '$lib/assets/icons/at-icon.svelte';
</script>
<footer>
  <a href="mailto:dodinhthyson@gmail.com" rel="me" class="p-1"><AtIcon />Đỗ Đình Thy Sơn</a>
  <a href="/hom-cong-duc" class="p-1">
		<CashIcon />
		 Hòm công đức
	</a>
</footer>
<style lang="postcss">
	@reference "../styles/app.css";

	footer {
		@apply sticky bottom-0 left-0 w-full bg-white px-4 py-4 dark:bg-prussian-blue flex flex-col;
	}
</style>