<script lang="ts">
	import { reveal } from '$lib/reveal';

	const steps = [
		{
			n: '01',
			title: 'Preventivo personalizzato',
			desc: 'Ci racconti le tue esigenze e noi ti ascoltiamo. Ricevi un preventivo chiaro e su misura entro 24 ore, senza sorprese.'
		},
		{
			n: '02',
			title: 'Pianificazione dettagliata',
			desc: 'Organizziamo un sopralluogo per valutare gli oggetti da traslocare, definiamo tempi e logistica e prepariamo i materiali di imballaggio.'
		},
		{
			n: '03',
			title: 'Imballaggio di precisione',
			desc: 'Avvolgiamo e proteggiamo ogni bene, dai più ingombranti ai più delicati, garantendo un trasporto sicuro e ordinato.'
		},
		{
			n: '04',
			title: 'Trasporto e montaggio',
			desc: 'Trasferiamo tutto al nuovo indirizzo e rimontiamo secondo le tue indicazioni. La tua nuova vita inizia qui.'
		}
	];
</script>

<section id="processo" class="bg-forest relative overflow-hidden py-24 text-paper md:py-32">
	<div
		class="pointer-events-none absolute inset-0 opacity-50"
		style="background: radial-gradient(50% 60% at 85% 0%, rgba(239,124,0,0.28), transparent 60%);"
		aria-hidden="true"
	></div>

	<div class="relative mx-auto max-w-6xl px-5">
		<div class="max-w-2xl">
			<p use:reveal class="text-leaf text-sm font-semibold tracking-[0.18em] uppercase">
				Il trasloco passo-passo
			</p>
			<h2 use:reveal={80} class="mt-3 text-4xl font-semibold text-balance md:text-5xl">
				Quattro passi, <span class="text-leaf italic">zero pensieri</span>
			</h2>
		</div>

		<ol class="mt-16 grid gap-px overflow-hidden rounded-3xl bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
			{#each steps as step, i (step.n)}
				<li use:reveal={i * 120} class="bg-forest relative flex flex-col p-8">
					<span class="font-display text-leaf/40 text-5xl font-semibold leading-none">{step.n}</span>
					<h3 class="font-display mt-6 text-xl font-semibold">{step.title}</h3>
					<p class="text-paper/65 mt-3 text-[0.95rem] leading-relaxed">{step.desc}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>
