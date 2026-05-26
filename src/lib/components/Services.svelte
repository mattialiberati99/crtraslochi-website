<script lang="ts">
	import { reveal } from '$lib/reveal';

	type Service = { title: string; desc: string; icon: string; img: string };

	const services: Service[] = [
		{
			title: 'Traslochi completi',
			desc: 'Soluzioni chiavi in mano per un trasloco sereno: pianifichiamo, proteggiamo, trasportiamo e ti consegniamo la nuova casa pronta da vivere.',
			icon: 'M3 12l9-8 9 8M5 10v10h14V10M9 20v-6h6v6',
			img: '/images/traslochi.jpg'
		},
		{
			title: 'Imballaggio di precisione',
			desc: 'Avvolgiamo ogni bene con materiali professionali su misura, per proteggere anche gli oggetti più delicati durante il trasporto.',
			icon: 'M21 8l-9-5-9 5 9 5 9-5zM3 8v8l9 5 9-5V8M12 13v8',
			img: '/images/hero.jpg'
		},
		{
			title: 'Montaggi mobili su misura',
			desc: 'Smontiamo, trasportiamo e rimontiamo i tuoi mobili con la massima cura. Realizziamo anche arredi su misura per ogni ambiente.',
			icon: 'M4 20v-6m16 6v-6M3 14h18l-2-8H5l-2 8zM7 6V4h10v2',
			img: '/images/montaggio.jpg'
		},
		{
			title: 'Trasporto affidabile',
			desc: 'Mezzi attrezzati e personale esperto per un trasporto sicuro, puntuale e tracciabile, in città come in tutta Italia.',
			icon: 'M3 7h11v9H3zM14 10h4l3 3v3h-7zM7 19a2 2 0 100-4 2 2 0 000 4zM18 19a2 2 0 100-4 2 2 0 000 4z',
			img: '/images/trasporti.jpg'
		},
		{
			title: 'Sgombero efficace e discreto',
			desc: 'Sgomberiamo cantine, appartamenti e uffici lasciandoli puliti e pronti per un nuovo inizio, con smaltimento responsabile.',
			icon: 'M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6',
			img: '/images/sgombero.jpg'
		},
		{
			title: 'Montaggio e organizzazione',
			desc: 'Posizioniamo e montiamo tutto secondo le tue indicazioni, organizzando gli spazi così da farti ritrovare ogni cosa al suo posto.',
			icon: 'M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 13h7v7H4z',
			img: '/images/generica.png'
		}
	];
</script>

<section id="servizi" class="relative py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-5">
		<div class="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<p use:reveal class="text-green text-sm font-semibold tracking-[0.18em] uppercase">
					Cosa offriamo
				</p>
				<h2 use:reveal={80} class="text-ink mt-3 text-4xl font-semibold text-balance md:text-5xl">
					Un solo interlocutore<br />per ogni esigenza
				</h2>
			</div>
			<p use:reveal={160} class="text-ink/65 max-w-sm text-base leading-relaxed">
				Dalla prima scatola all'ultimo mobile montato: ci occupiamo di tutto, così tu
				pensi solo alla tua nuova vita.
			</p>
		</div>

		<div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as service, i (service.title)}
				<article
					use:reveal={i * 90}
					class="group border-ink/8 hover:border-green/40 flex flex-col overflow-hidden rounded-3xl border bg-paper transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
				>
					<div class="relative h-52 overflow-hidden">
						<img
							src={service.img}
							alt={service.title}
							loading="lazy"
							class="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
						/>
						<div class="from-ink/55 absolute inset-0 bg-gradient-to-t to-transparent"></div>
						<span
							class="bg-green text-ink absolute bottom-3 left-3 grid size-11 place-items-center rounded-xl shadow-lg"
						>
							<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
								<path d={service.icon} stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</span>
					</div>
					<div class="flex grow flex-col p-7">
						<h3 class="text-ink text-xl font-semibold">{service.title}</h3>
						<p class="text-ink/65 mt-3 grow text-[0.95rem] leading-relaxed">{service.desc}</p>
						<a
							href="#contatti"
							class="text-green mt-6 inline-flex items-center gap-1.5 text-sm font-semibold"
						>
							Richiedi questo servizio
							<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="transition-transform duration-300 group-hover:translate-x-1">
								<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</a>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
