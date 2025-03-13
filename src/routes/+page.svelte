<svelte:head>
	<title>Thuốc Lào Blog</title>
	<meta name="description" content="Cái xô chứa những suy nghĩ lắng đọng của một kẻ yêu Hà Nội." />
</svelte:head>
<script>
  import LinkItem from '$components/list-item.svelte'
</script>
<section class="mx-4 flex flex-col gap-y-4">
  <p>Cái xô chứa những suy nghĩ lắng đọng của một kẻ yêu Hà Nội.</p>
  <ul class="mb-4 list-book list-inside">
    <LinkItem href="/bun-cha">Bún Chả</LinkItem>
    <LinkItem href="/thuoc-lao">Thuốc Lào</LinkItem>
    <LinkItem href="/tra-da">Trà Đá</LinkItem>
    <LinkItem href="/bun-thang">Bún Thang</LinkItem>
    <LinkItem href="/pho-ga">Phở Gà</LinkItem>
    <LinkItem href="/pho-bo">Phở Bò</LinkItem>
    <LinkItem href="/che-lam">Chè Lam</LinkItem>
    <LinkItem href="/ca-phe-sua-da">Cà Phê Sữa Đá</LinkItem>
  </ul>
</section>