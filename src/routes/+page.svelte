<script>
	import LinkItem from '$components/list-item.svelte';
</script>

<svelte:head>
	<title>Thuốc Lào Blog</title>
	<meta name="description" content="Cái xô chứa những suy nghĩ lắng đọng của một kẻ yêu Hà Nội." />
</svelte:head>
<section>
	<p>Cái xô chứa những suy nghĩ lắng đọng của một kẻ yêu Hà Nội.</p>
	<ul class="list-book">
		<LinkItem href="/bun-cha">Bún Chả</LinkItem>
		<LinkItem href="/thuoc-lao">Thuốc Lào</LinkItem>
		<LinkItem href="/tra-da">Trà Đá</LinkItem>
		<LinkItem href="/bun-thang">Bún Thang</LinkItem>
		<LinkItem href="/pho-ga">Phở Gà</LinkItem>
		<LinkItem href="/pho-bo">Phở Bò</LinkItem>
		<LinkItem href="/che-lam">Chè Lam</LinkItem>
		<LinkItem href="/ca-phe-sua-da">Cà Phê Sữa Đá</LinkItem>
		<LinkItem href="/ha-noi-khoanh-khac">Hà Nội Khoảnh Khắc</LinkItem>
	</ul>
</section>

<style lang="postcss">
	@reference "$styles/app.css";

	section {
		@apply mx-4 flex flex-col gap-y-4;
	}
	ul {
		@apply mb-4 list-inside;
	}
</style>
