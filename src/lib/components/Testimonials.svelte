<script lang="ts">
	import { reveal } from '$lib/reveal';

	const reviews = [
		{
			quote: 'Affidabilità e cortesia',
			body: 'Squadra puntuale e gentilissima. Hanno imballato tutto con una cura incredibile, niente è arrivato graffiato. Consigliatissimi.',
			name: 'Giulia M.',
			role: 'Trasloco appartamento, Verona'
		},
		{
			quote: 'Oltre le aspettative',
			body: 'Pensavo sarebbe stato uno stress, invece si sono occupati di tutto loro. Montaggio mobili perfetto e prezzo onesto rispetto al preventivo.',
			name: 'Marco T.',
			role: 'Trasloco villa, Villafranca'
		},
		{
			quote: 'Servizio eccellente!',
			body: 'Dal preventivo in 24 ore al montaggio finale, tutto liscio. Professionali, sostenibili e disponibili. Li richiamerò sicuramente.',
			name: 'Elena R.',
			role: 'Trasloco ufficio, Mantova'
		}
	];
</script>

<section id="recensioni" class="relative py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-5">
		<div class="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<p use:reveal class="text-green text-sm font-semibold tracking-[0.18em] uppercase">
					Cosa dicono di noi
				</p>
				<h2 use:reveal={80} class="text-forest mt-3 text-4xl font-semibold text-balance md:text-5xl">
					Storie di traslochi<br />andati a buon fine
				</h2>
			</div>
			<div use:reveal={160} class="flex items-center gap-2">
				<div class="flex">
					{#each Array(5) as _, i (i)}
						<svg width="22" height="22" viewBox="0 0 24 24" fill="#ef7c00" aria-hidden="true">
							<path d="M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8L12 17.6 5.9 20.4l1.5-6.8L2.2 9l6.9-.7z" />
						</svg>
					{/each}
				</div>
				<span class="text-ink/70 text-sm font-medium">5.0 · clienti soddisfatti</span>
			</div>
		</div>

		<div class="mt-14 grid gap-5 md:grid-cols-3">
			{#each reviews as review, i (review.name)}
				<figure
					use:reveal={i * 110}
					class="border-ink/8 flex flex-col rounded-3xl border bg-paper p-7"
				>
					<svg width="34" height="34" viewBox="0 0 24 24" fill="none" class="text-green/30" stroke="currentColor" aria-hidden="true">
						<path d="M9 7H6a3 3 0 00-3 3v5h5v-5M18 7h-3a3 3 0 00-3 3v5h5v-5" stroke-width="1.6" stroke-linejoin="round" />
					</svg>
					<p class="text-forest font-display mt-4 text-xl font-semibold">
						{review.quote}
					</p>
					<blockquote class="text-ink/65 mt-2 grow leading-relaxed">{review.body}</blockquote>
					<figcaption class="border-ink/8 mt-6 flex items-center gap-3 border-t pt-5">
						<span class="bg-forest text-paper font-display grid size-10 place-items-center rounded-full text-sm font-semibold">
							{review.name.charAt(0)}
						</span>
						<div>
							<p class="text-forest text-sm font-semibold">{review.name}</p>
							<p class="text-ink/55 text-xs">{review.role}</p>
						</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>
