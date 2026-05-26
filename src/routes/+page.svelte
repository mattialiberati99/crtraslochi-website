<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Services from '$lib/components/Services.svelte';
	import Process from '$lib/components/Process.svelte';
	import About from '$lib/components/About.svelte';
	import Testimonials from '$lib/components/Testimonials.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	const marquee = [
		'Traslochi completi',
		'Imballaggio di precisione',
		'Montaggio mobili',
		'Trasporto sicuro',
		'Sgombero',
		'Preventivo in 24h',
		'Beni assicurati',
		'Sostenibilità'
	];
</script>

<svelte:head>
	<title>CR Traslochi — Traslochi senza pensieri a Villafranca (VR)</title>
</svelte:head>

<div class="grain relative">
	<Header />

	<main>
		<Hero />

		<!-- scrolling keyword strip -->
		<section class="bg-forest overflow-hidden py-4 text-paper" aria-hidden="true">
			<div class="marquee-track flex w-max gap-10 whitespace-nowrap">
				{#each [...marquee, ...marquee] as word, i (i)}
					<span class="inline-flex items-center gap-10 text-lg font-medium">
						{word}
						<svg width="10" height="10" viewBox="0 0 10 10" fill="#ef7c00">
							<circle cx="5" cy="5" r="5" />
						</svg>
					</span>
				{/each}
			</div>
		</section>

		<Services />
		<Process />
		<About />
		<Testimonials />
		<Contact />
	</main>

	<Footer />
</div>
