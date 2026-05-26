<script lang="ts">
	import { reveal } from '$lib/reveal';

	const values = [
		{
			title: 'Innovazione',
			desc: 'Metodi e attrezzature moderne per rendere ogni trasloco più rapido, sicuro ed efficiente.',
			icon: 'M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4L12 3zM5 17l.8 2 .8-2 2-.8-2-.8L6 13l-.8 2-2 .8 2 .8z'
		},
		{
			title: 'Sostenibilità',
			desc: 'Soluzioni a basso impatto ambientale: meno sprechi, materiali riutilizzabili e logistica ottimizzata.',
			icon: 'M12 21c5-1 8-5 8-11V5l-8-2-8 2v5c0 6 3 10 8 11zM12 6v9M9 9c1 1 2 1 3 0M9 13c1 1 2 1 3 0'
		},
		{
			title: 'Affidabilità',
			desc: 'Puntualità, trasparenza e cura artigianale: un servizio impeccabile su cui puoi davvero contare.',
			icon: 'M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3zM9 12l2 2 4-4'
		}
	];
</script>

<section id="chi-siamo" class="relative py-24 md:py-32">
	<div class="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
		<div>
			<p use:reveal class="text-green text-sm font-semibold tracking-[0.18em] uppercase">
				Chi siamo
			</p>
			<h2 use:reveal={80} class="text-forest mt-3 text-4xl font-semibold text-balance md:text-5xl">
				Specialisti nel settore, <span class="text-green italic">vicini a te</span>
			</h2>
			<p use:reveal={160} class="text-ink/70 mt-6 text-lg leading-relaxed">
				CR Traslochi assicura un servizio impeccabile costruito sull'esperienza.
				Innovazione, sostenibilità e affidabilità sono al centro della nostra missione:
				crediamo in un futuro in cui il trasporto contribuisce positivamente alla società,
				minimizzando l'impatto ambientale.
			</p>
			<p use:reveal={240} class="text-ink/60 mt-4 leading-relaxed">
				Combiniamo efficienza e responsabilità ambientale per offrire soluzioni di
				trasporto su misura per ogni cliente, dal piccolo trasferimento al trasloco completo.
			</p>

			<a
				use:reveal={320}
				href="#contatti"
				class="group text-forest mt-8 inline-flex items-center gap-2 text-base font-semibold"
			>
				<span class="border-forest/30 group-hover:bg-forest grid size-11 place-items-center rounded-full border transition-colors duration-300 group-hover:text-paper">
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</span>
				Parla con il nostro team
			</a>
		</div>

		<div class="flex flex-col gap-4">
			{#each values as value, i (value.title)}
				<div
					use:reveal={i * 110}
					class="group border-ink/8 flex items-start gap-5 rounded-3xl border bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
				>
					<span class="bg-green/12 text-green grid size-14 shrink-0 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110">
						<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
							<path d={value.icon} stroke-linecap="round" stroke-linejoin="round" />
						</svg>
					</span>
					<div>
						<h3 class="text-forest text-xl font-semibold">{value.title}</h3>
						<p class="text-ink/65 mt-1.5 leading-relaxed">{value.desc}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
