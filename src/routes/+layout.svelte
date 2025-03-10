<script>
	import '../styles/app.css';
	let { children } = $props();
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';
	onMount(() => {
		injectSpeedInsights();
		injectAnalytics({ mode: dev ? 'development': 'production' });
	})
</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>

<nav class="m-4 sticky top-0 left-0 bg-white">
	<a href="/">
		<h1>Thuốc Lào Blog</h1>
	</a>
</nav>
<main class="max-w-[700px]">
	{@render children()}
</main>
<footer class="sticky bottom-0 left-0 w-full bg-white px-4 py-4">
  <p>Viết bởi <a href="mailto:dodinhthyson@gmail.com" rel="me">Đỗ Đình Thy Sơn</a></p>
  <a href="/hom-cong-duc">Hòm công đức</a>
</footer>
