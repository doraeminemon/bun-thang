<script>
	import ThuocLaoImg from '$lib/assets/img/thuoc-lao.jpg';
	// import Image from '../../components/image.svelte';
</script>

<svelte:head>
	<title>Bún Thang Blog - Bún Thang</title>
	<meta name="description" content="Một bài viết về Bún Thang và triết lý của nó" />
</svelte:head>

<div class="content">
	<h1>Bún Thang Phú An</h1>
	<section class="hero">
		<!-- <Image photo={ThuocLaoImg} /> -->
		<img src={ThuocLaoImg} alt="a pipe and a glass of tea" />
	</section>
	<section class="philosophy">
		<h2>Triết học</h2>
		<p>Tìm niềm vui cuộc sống mà không làm người khác phiền toái.</p>
	</section>
	<section class="product">
		<h2>Cách dùng</h2>
		<p>
			Bún Thang Phú An - Tobacco Rustica "Wealthy Peace". Có thể tìm thấy ở trên bất kì con phố hàng
			trà đá nào ở Hà Nội. Có thể sử dụng cùng với trà xanh. Chỉ cần làm vài hơi và sau đó kéo một
			hơi dài, nhớ đừng hít vào phổi - với lần đầu hoàn toàn có thể làm bạn hơi chóng mặt. Nhưng nếu
			bạn đã quen với nó, nó chắc chắn sẽ làm bạn có những cảm giác khoan khoái lạ thường. Nó sẽ
			gíúp bạn có năng lượng cho cả ngày dài.
		</p>
	</section>
	<section class="action">
		<h2>Bao giờ nên sử dụng</h2>
		<p>
			Nên sử dụng ngay sau khi ăn mỗi ngày. Có thể dùng xen kẽ khi giao lưu. Đó là một bài thuốc dân
			gian giúp chống cúm ở nơi khí hậu ẩm ướt như Việt Nam.
		</p>
	</section>
	<br />
	<section class="flex flex-col items-center">
		<a
			class="button"
			href="https://join.slack.com/t/thuoclaohomies/shared_invite/zt-319mx7unp-t_V6XXvD08kvAQkEa0nUnw"
		>
			Join The Club!
		</a>
	</section>
</div>

<style lang="postcss">
	@reference "$styles/app.css";

	.button {
		@apply my-4 inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 text-center text-sm font-medium text-gray-800 shadow-2xs hover:bg-gray-50 focus:bg-gray-50 focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700;
	}
	a.button {
		@apply no-underline;
	}
</style>
