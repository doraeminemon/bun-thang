<svelte:head>
	<title>Thuốc Lào Blog</title>
	<meta name="description" content="Khoảnh đất nơi góp nhặt những ý nghĩ về văn hoá Hà Nội" />
</svelte:head>
<script>
	import ThuocLaoImg from '$lib/assets/img/thuoc-lao.jpg';
</script>
<section class="m-4 min-h-screen flex flex-col">
  <h1>Thuốc Lào Blog</h1>
  <img src={ThuocLaoImg} width="" alt="Some green tea with smoking pipe">
  <p class="py-4">Khoảnh đất nơi góp nhặt những ý nghĩ về văn hoá Hà Nội</p>
  <a href="/bun-cha">Bún Chả</a>
  <a href="/thuoc-lao">Thuốc Lào</a>
  <a href="/tra-da">Trà Đá</a>
  <a href="/bun-thang">Bún Thang</a>
  <a href="/pho-ga">Phở Gà</a>
  <a href="/che-lam">Chè Lam</a>
</section>