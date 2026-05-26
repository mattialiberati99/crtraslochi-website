<script lang="ts">
	import type { Snippet } from 'svelte';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	let {
		title,
		updated,
		children
	}: { title: string; updated: string; children: Snippet } = $props();
</script>

<div class="grain relative flex min-h-screen flex-col">
	<Header />

	<main class="grow pt-32 md:pt-40">
		<header class="mx-auto max-w-3xl px-5">
			<a
				href="/"
				class="text-ink/60 hover:text-green inline-flex items-center gap-1.5 text-sm font-medium transition-colors"
			>
				<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
					<path d="M19 12H5M11 6l-6 6 6 6" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
				Torna alla home
			</a>
			<h1 class="text-ink mt-5 text-4xl font-semibold text-balance md:text-5xl">{title}</h1>
			<p class="text-ink/55 mt-3 text-sm">Ultimo aggiornamento: {updated}</p>
		</header>

		<div
			class="prose prose-neutral prose-headings:font-display prose-headings:text-ink prose-headings:font-semibold prose-h2:mt-12 prose-h2:text-2xl prose-h3:text-lg prose-a:text-green prose-a:font-medium prose-strong:text-ink mx-auto mt-10 max-w-3xl px-5 pb-24 leading-relaxed"
		>
			{@render children()}
		</div>
	</main>

	<Footer />
</div>
