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
	<!-- <script src="https://analytics.ahrefs.com/analytics.js" data-key="XJF/XFQKqZ//dAXSM+bCJg" async></script> -->
</svelte:head>

<nav class="m-4">
	<a href="/">
		<h1>Thuốc Lào Blog</h1>
	</a>
</nav>
<main class="max-w-[700px]">
	{@render children()}
</main>
