<script lang="ts">
	import { onMount } from 'svelte';
	import { fly, fade } from 'svelte/transition';
	import {
		consent,
		loadConsent,
		acceptAll,
		rejectAll,
		savePreferences
	} from '$lib/cookies.svelte';

	let draftAnalytics = $state(false);
	let draftMarketing = $state(false);

	onMount(loadConsent);

	// When the preferences panel opens, seed the toggles from the saved choice.
	$effect(() => {
		if (consent.open) {
			draftAnalytics = consent.analytics;
			draftMarketing = consent.marketing;
		}
	});

	const showBanner = $derived(!consent.decided && !consent.open);

	function saveDraft() {
		consent.analytics = draftAnalytics;
		consent.marketing = draftMarketing;
		savePreferences();
	}

	function closePanel() {
		consent.open = false;
	}

	function onKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && consent.open) closePanel();
	}
</script>

<svelte:window onkeydown={onKeydown} />

<!-- Consent banner -->
{#if showBanner}
	<div
		class="fixed inset-x-0 bottom-0 z-[60] p-4 sm:p-6"
		transition:fly={{ y: 24, duration: 400 }}
	>
		<div
			class="bg-forest text-paper border-paper/10 mx-auto flex max-w-4xl flex-col gap-5 rounded-3xl border p-6 shadow-2xl md:flex-row md:items-center md:gap-8 md:p-7"
			role="region"
			aria-label="Informativa sui cookie"
		>
			<div class="flex-1">
				<p class="font-display text-lg font-semibold">Rispettiamo la tua privacy 🍪</p>
				<p class="text-paper/70 mt-1.5 text-sm leading-relaxed">
					Usiamo cookie tecnici necessari al funzionamento del sito. Con il tuo consenso
					possiamo usare cookie statistici e di marketing. Leggi la
					<a href="/cookie" class="text-leaf font-medium underline-offset-2 hover:underline">Cookie Policy</a>
					e la
					<a href="/privacy" class="text-leaf font-medium underline-offset-2 hover:underline">Privacy Policy</a>.
				</p>
			</div>
			<div class="flex flex-col gap-2.5 sm:flex-row md:flex-col lg:flex-row">
				<button
					type="button"
					onclick={() => (consent.open = true)}
					class="border-paper/25 hover:bg-paper/10 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
				>
					Personalizza
				</button>
				<button
					type="button"
					onclick={rejectAll}
					class="border-paper/25 hover:bg-paper/10 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
				>
					Rifiuta
				</button>
				<button
					type="button"
					onclick={acceptAll}
					class="bg-green text-ink rounded-full px-6 py-2.5 text-sm font-semibold transition-colors hover:bg-[#d96f00]"
				>
					Accetta tutti
				</button>
			</div>
		</div>
	</div>
{/if}

<!-- Preferences modal -->
{#if consent.open}
	<div class="fixed inset-0 z-[70] flex items-end justify-center p-4 sm:items-center" role="presentation">
		<button
			type="button"
			class="bg-ink/60 absolute inset-0 cursor-default"
			aria-label="Chiudi preferenze cookie"
			onclick={closePanel}
			transition:fade={{ duration: 200 }}
		></button>

		<div
			class="bg-paper relative z-10 w-full max-w-lg rounded-3xl p-7 shadow-2xl md:p-8"
			role="dialog"
			aria-modal="true"
			aria-labelledby="cookie-title"
			transition:fly={{ y: 24, duration: 320 }}
		>
			<div class="flex items-start justify-between gap-4">
				<div>
					<h2 id="cookie-title" class="text-ink font-display text-2xl font-semibold">
						Preferenze cookie
					</h2>
					<p class="text-ink/60 mt-1 text-sm">Scegli quali categorie attivare.</p>
				</div>
				<button
					type="button"
					onclick={closePanel}
					class="text-ink/50 hover:text-ink hover:bg-cream rounded-full p-1.5 transition-colors"
					aria-label="Chiudi"
				>
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M6 6l12 12M18 6 6 18" stroke-linecap="round" />
					</svg>
				</button>
			</div>

			<div class="mt-6 space-y-3">
				<!-- Necessary -->
				<div class="border-ink/8 flex items-start justify-between gap-4 rounded-2xl border bg-cream/40 p-4">
					<div>
						<p class="text-ink font-semibold">Necessari</p>
						<p class="text-ink/60 mt-0.5 text-sm leading-relaxed">
							Indispensabili per il funzionamento del sito e per ricordare le tue scelte sui
							cookie. Sempre attivi.
						</p>
					</div>
					<span class="text-green mt-0.5 shrink-0 text-sm font-semibold">Sempre attivi</span>
				</div>

				<!-- Analytics -->
				<label class="border-ink/8 flex items-start justify-between gap-4 rounded-2xl border bg-cream/40 p-4">
					<div>
						<p class="text-ink font-semibold">Statistici</p>
						<p class="text-ink/60 mt-0.5 text-sm leading-relaxed">
							Ci aiutano a capire come viene usato il sito, in forma aggregata e anonima.
						</p>
					</div>
					<input type="checkbox" bind:checked={draftAnalytics} class="text-green focus:ring-green/30 mt-1 size-5 shrink-0 rounded border-ink/20" />
				</label>

				<!-- Marketing -->
				<label class="border-ink/8 flex items-start justify-between gap-4 rounded-2xl border bg-cream/40 p-4">
					<div>
						<p class="text-ink font-semibold">Marketing</p>
						<p class="text-ink/60 mt-0.5 text-sm leading-relaxed">
							Usati per mostrarti comunicazioni e annunci più pertinenti.
						</p>
					</div>
					<input type="checkbox" bind:checked={draftMarketing} class="text-green focus:ring-green/30 mt-1 size-5 shrink-0 rounded border-ink/20" />
				</label>
			</div>

			<div class="mt-6 flex flex-col gap-2.5 sm:flex-row">
				<button
					type="button"
					onclick={rejectAll}
					class="border-ink/15 hover:bg-cream text-ink rounded-full border px-5 py-3 text-sm font-semibold transition-colors"
				>
					Rifiuta tutti
				</button>
				<button
					type="button"
					onclick={saveDraft}
					class="border-ink/15 hover:bg-cream text-ink rounded-full border px-5 py-3 text-sm font-semibold transition-colors"
				>
					Salva preferenze
				</button>
				<button
					type="button"
					onclick={acceptAll}
					class="bg-green text-ink ml-auto rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-[#d96f00]"
				>
					Accetta tutti
				</button>
			</div>
		</div>
	</div>
{/if}
