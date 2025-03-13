<script>
	import '$styles/app.css';
	let { children } = $props();
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { dev } from '$app/environment';
	import { onMount } from 'svelte';
	onMount(() => {
		injectSpeedInsights();
		injectAnalytics({ mode: dev ? 'development': 'production' });
	})
	import NavBar from '$components/nav-bar.svelte';
	import Footer from '$components/footer.svelte';
</script>
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet">
</svelte:head>

<NavBar />
<main>
	{@render children()}
</main>
<Footer />
<style lang="postcss">
	@reference "tailwindcss";

	main {
		@apply min-h-screen max-w-[700px];
	}
</style>