<script lang="ts">
	import { reveal } from '$lib/reveal';
</script>

<section id="top" class="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
	<!-- atmospheric background -->
	<div
		class="pointer-events-none absolute inset-0 -z-10"
		style="background:
			radial-gradient(60% 55% at 78% 8%, rgba(239,124,0,0.16), transparent 60%),
			radial-gradient(50% 50% at 8% 90%, rgba(26,26,24,0.06), transparent 55%);"
		aria-hidden="true"
	></div>

	<div class="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr]">
		<div>
			<span
				use:reveal
				class="border-forest/15 text-forest inline-flex items-center gap-2 rounded-full border bg-paper/60 px-4 py-1.5 text-sm font-medium"
			>
				<span class="bg-green inline-block size-2 rounded-full"></span>
				Villafranca di Verona · in tutta Italia
			</span>

			<h1
				use:reveal={120}
				class="text-forest mt-6 text-balance text-5xl leading-[0.98] font-semibold md:text-6xl lg:text-7xl"
			>
				Traslochi
				<span class="text-green italic">senza pensieri</span>,
				dalla A alla Z.
			</h1>

			<p
				use:reveal={220}
				class="text-ink/70 mt-6 max-w-md text-lg leading-relaxed text-balance"
			>
				Pianifica, proteggi, trasporta e vivi la tua nuova casa. CR Traslochi si occupa
				di ogni dettaglio — con cura artigianale e un occhio alla sostenibilità.
			</p>

			<div use:reveal={320} class="mt-8 flex flex-wrap items-center gap-4">
				<a
					href="#contatti"
					class="group bg-green inline-flex items-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-ink shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d96f00]"
					style="box-shadow: 0 22px 45px -22px rgba(239,124,0,0.9);"
				>
					Richiedi preventivo
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-300 group-hover:translate-x-1">
						<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</a>
				<a
					href="tel:+393276920739"
					class="text-forest border-forest/20 hover:border-forest/50 inline-flex items-center gap-2 rounded-full border bg-paper/50 px-6 py-4 text-base font-semibold transition-colors"
				>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M3 5c0 9 7 16 16 16l2-4-5-2-2 2c-3-1.5-5-3.5-6.5-6.5l2-2-2-5z" stroke-linejoin="round" />
					</svg>
					327 692 0739
				</a>
			</div>

			<dl use:reveal={420} class="border-ink/10 mt-12 flex gap-8 border-t pt-6">
				<div>
					<dt class="font-display text-forest text-3xl font-semibold">24h</dt>
					<dd class="text-ink/60 text-sm">Preventivo gratuito</dd>
				</div>
				<div>
					<dt class="font-display text-forest text-3xl font-semibold">10+</dt>
					<dd class="text-ink/60 text-sm">Anni di esperienza</dd>
				</div>
				<div>
					<dt class="font-display text-forest text-3xl font-semibold">100%</dt>
					<dd class="text-ink/60 text-sm">Beni assicurati</dd>
				</div>
			</dl>
		</div>

		<!-- photo panel -->
		<div use:reveal={260} class="relative">
			<!-- decorative orange frame offset -->
			<div
				class="bg-green absolute -top-4 -right-4 hidden h-full w-full rounded-[2.5rem] sm:block"
				aria-hidden="true"
			></div>

			<div
				class="relative overflow-hidden rounded-[2.5rem] shadow-2xl"
				style="box-shadow: 0 40px 90px -45px rgba(26,26,24,0.65);"
			>
				<img
					src="/images/hero.jpg"
					alt="Operatore CR Traslochi che imballa scatole per un trasloco"
					class="h-[420px] w-full object-cover object-center lg:h-[540px]"
				/>
				<div class="from-ink/40 absolute inset-0 bg-gradient-to-t to-transparent"></div>
			</div>

			<!-- floating badge -->
			<div
				class="float-slow border-ink/5 absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border bg-paper px-4 py-3 shadow-xl sm:-left-8"
			>
				<span class="bg-green/15 text-green grid size-10 place-items-center rounded-xl">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
						<path d="M4 13l5 5L20 7" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</span>
				<div>
					<p class="text-ink text-sm font-semibold">Imballaggio incluso</p>
					<p class="text-ink/55 text-xs">materiali su misura</p>
				</div>
			</div>
		</div>
	</div>
</section>
