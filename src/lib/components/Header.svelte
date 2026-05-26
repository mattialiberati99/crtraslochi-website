<script lang="ts">
	import Brand from './Brand.svelte';

	const links = [
		{ href: '/#servizi', label: 'Servizi' },
		{ href: '/#processo', label: 'Il trasloco' },
		{ href: '/#chi-siamo', label: 'Chi siamo' },
		{ href: '/#recensioni', label: 'Recensioni' }
	];

	let scrolled = $state(false);
	let open = $state(false);

	function onScroll() {
		scrolled = window.scrollY > 24;
	}
</script>

<svelte:window onscroll={onScroll} />

<header
	class="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out"
	class:py-5={!scrolled}
	class:py-3={scrolled}
>
	<div class="mx-auto max-w-6xl px-5">
		<div
			class="flex items-center justify-between rounded-full border px-5 py-2.5 transition-all duration-500"
			class:border-transparent={!scrolled}
			class:bg-transparent={!scrolled}
			class:border-ink={scrolled}
			class:border-opacity-10={scrolled}
			class:bg-paper={scrolled}
			class:shadow-lg={scrolled}
			class:shadow-forest={scrolled}
			style={scrolled ? 'box-shadow: 0 18px 50px -28px rgba(20,53,36,0.55);' : ''}
		>
			<Brand />

			<nav class="hidden items-center gap-8 md:flex">
				{#each links as link (link.href)}
					<a
						href={link.href}
						class="text-forest/75 hover:text-forest relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-green after:transition-all after:duration-300 hover:after:w-full"
					>
						{link.label}
					</a>
				{/each}
			</nav>

			<div class="flex items-center gap-3">
				<a
					href="/#contatti"
					class="bg-forest hover:bg-pine hidden rounded-full px-5 py-2.5 text-sm font-semibold text-paper shadow-sm transition-all duration-300 hover:-translate-y-0.5 sm:inline-flex"
				>
					Preventivo gratuito
				</a>
				<button
					type="button"
					class="text-forest md:hidden"
					aria-label="Apri menù"
					aria-expanded={open}
					onclick={() => (open = !open)}
				>
					<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
						{#if open}
							<path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
						{:else}
							<path d="M4 7h16M4 12h16M4 17h16" stroke-linecap="round" />
						{/if}
					</svg>
				</button>
			</div>
		</div>

		{#if open}
			<nav
				class="border-ink/10 bg-paper mt-2 flex flex-col gap-1 rounded-3xl border p-3 shadow-xl md:hidden"
			>
				{#each links as link (link.href)}
					<a
						href={link.href}
						onclick={() => (open = false)}
						class="text-forest hover:bg-cream rounded-2xl px-4 py-3 text-base font-medium transition-colors"
					>
						{link.label}
					</a>
				{/each}
				<a
					href="/#contatti"
					onclick={() => (open = false)}
					class="bg-forest mt-1 rounded-2xl px-4 py-3 text-center text-base font-semibold text-paper"
				>
					Preventivo gratuito
				</a>
			</nav>
		{/if}
	</div>
</header>
