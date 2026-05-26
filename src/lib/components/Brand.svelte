<script lang="ts">
	let {
		tone = 'dark',
		class: klass = ''
	}: { tone?: 'dark' | 'light'; class?: string } = $props();

	// `tone` describes the surface: dark surface → white logo, light surface → black logo.
	const src = $derived(tone === 'light' ? '/brand/logo-white.png' : '/brand/logo-black.png');
</script>

<a href="/" class="group inline-flex items-center {klass}" aria-label="CR Traslochi — home">
	<img
		{src}
		alt="CR Traslochi"
		width="699"
		height="221"
		class="h-9 w-auto transition-transform duration-500 ease-out group-hover:scale-[1.03]"
	/>
</a>
