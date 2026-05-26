<script lang="ts">
	import Brand from './Brand.svelte';
	import { openPreferences } from '$lib/cookies.svelte';

	const year = new Date().getFullYear();

	const cols = [
		{
			title: 'Servizi',
			links: [
				{ label: 'Traslochi completi', href: '/#servizi' },
				{ label: 'Imballaggio', href: '/#servizi' },
				{ label: 'Montaggio mobili', href: '/#servizi' },
				{ label: 'Sgombero', href: '/#servizi' }
			]
		},
		{
			title: 'Azienda',
			links: [
				{ label: 'Chi siamo', href: '/#chi-siamo' },
				{ label: 'Il trasloco', href: '/#processo' },
				{ label: 'Recensioni', href: '/#recensioni' },
				{ label: 'Contatti', href: '/#contatti' }
			]
		}
	];
</script>

<footer class="bg-forest text-paper">
	<div class="mx-auto max-w-6xl px-5 py-16">
		<div class="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
			<div>
				<Brand tone="light" />
				<p class="text-paper/65 mt-5 max-w-xs leading-relaxed">
					Traslochi senza pensieri a Villafranca di Verona e in tutta Italia. Pianifica,
					proteggi, trasporta e vivi la tua nuova casa.
				</p>
				<a
					href="https://wa.me/393276920739"
					target="_blank"
					rel="noopener"
					class="bg-green hover:bg-leaf text-forest mt-6 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors"
				>
					Scrivici su WhatsApp
				</a>
			</div>

			{#each cols as col (col.title)}
				<nav class="flex flex-col gap-3">
					<p class="text-leaf text-sm font-semibold tracking-[0.12em] uppercase">{col.title}</p>
					{#each col.links as link (link.label)}
						<a href={link.href} class="text-paper/70 hover:text-paper w-fit text-[0.95rem] transition-colors">
							{link.label}
						</a>
					{/each}
				</nav>
			{/each}
		</div>

		<div
			class="border-paper/15 mt-12 flex flex-col gap-4 border-t pt-7 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {year} CR Traslochi · Via Carlo Alberto 55, Villafranca (VR) · Tutti i diritti riservati.</p>
			<div class="flex flex-wrap gap-x-6 gap-y-2">
				<a href="/privacy" class="hover:text-paper transition-colors">Privacy Policy</a>
				<a href="/cookie" class="hover:text-paper transition-colors">Cookie Policy</a>
				<button type="button" onclick={openPreferences} class="hover:text-paper transition-colors">
					Gestisci cookie
				</button>
			</div>
		</div>
	</div>
</footer>
