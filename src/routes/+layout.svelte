<script lang="ts">
	import './layout.css';
	import CookieConsent from '$lib/components/CookieConsent.svelte';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" type="image/png" href="/brand/icon.png" /></svelte:head>
{@render children()}
<CookieConsent />
