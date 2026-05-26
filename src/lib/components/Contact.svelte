<script lang="ts">
	import { reveal } from '$lib/reveal';
	import { enhance } from '$app/forms';

	let nome = $state('');
	let email = $state('');
	let telefono = $state('');
	let partenza = $state('');
	let destinazione = $state('');
	let servizio = $state('Trasloco completo');
	let messaggio = $state('');

	let submitting = $state(false);
	let sent = $state(false);
	let errors = $state<Record<string, string>>({});
	let generalError = $state('');

	const servizi = [
		'Trasloco completo',
		'Imballaggio',
		'Montaggio mobili',
		'Trasporto',
		'Sgombero',
		'Altro'
	];

	const inputClass =
		'border-ink/15 focus:border-green focus:ring-green/20 rounded-xl border bg-cream/40 px-4 py-3 text-ink outline-none focus:ring-4';

	function reset() {
		sent = false;
		errors = {};
		generalError = '';
		nome = email = telefono = partenza = destinazione = messaggio = '';
		servizio = 'Trasloco completo';
	}
</script>

<section id="contatti" class="py-24 md:py-32">
	<div class="mx-auto max-w-6xl px-5">
		<div class="bg-forest grid overflow-hidden rounded-[2.5rem] lg:grid-cols-[0.95fr_1.05fr]">
			<!-- info side -->
			<div class="relative overflow-hidden p-9 text-paper md:p-12">
				<div
					class="pointer-events-none absolute inset-0 opacity-60"
					style="background: radial-gradient(60% 50% at 0% 100%, rgba(239,124,0,0.3), transparent 60%);"
					aria-hidden="true"
				></div>
				<div class="relative">
					<p use:reveal class="text-leaf text-sm font-semibold tracking-[0.18em] uppercase">
						Contattaci
					</p>
					<h2 use:reveal={80} class="mt-3 text-4xl font-semibold text-balance md:text-5xl">
						Vuoi un preventivo <span class="text-leaf italic">gratuito?</span>
					</h2>
					<p use:reveal={160} class="text-paper/70 mt-5 text-lg leading-relaxed">
						Raccontaci il tuo trasloco. Riceverai un preventivo personalizzato e senza
						impegno entro 24 ore, con una conferma via email.
					</p>

					<ul class="mt-10 space-y-5">
						<li use:reveal={220} class="flex items-center gap-4">
							<span class="bg-paper/10 grid size-12 shrink-0 place-items-center rounded-2xl">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
									<path d="M3 5c0 9 7 16 16 16l2-4-5-2-2 2c-3-1.5-5-3.5-6.5-6.5l2-2-2-5z" stroke-linejoin="round" />
								</svg>
							</span>
							<div>
								<p class="text-paper/55 text-xs uppercase tracking-wide">Telefono</p>
								<a href="tel:+393276920739" class="text-lg font-semibold hover:text-leaf">+39 327 692 0739</a>
							</div>
						</li>
						<li use:reveal={280} class="flex items-center gap-4">
							<span class="bg-paper/10 grid size-12 shrink-0 place-items-center rounded-2xl">
								<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
									<path d="M12 21c5-5 8-8.5 8-12a8 8 0 10-16 0c0 3.5 3 7 8 12z" stroke-linejoin="round" />
									<circle cx="12" cy="9" r="2.5" />
								</svg>
							</span>
							<div>
								<p class="text-paper/55 text-xs uppercase tracking-wide">Sede</p>
								<p class="text-lg font-semibold">Via Carlo Alberto 55, Villafranca (VR)</p>
							</div>
						</li>
					</ul>
				</div>
			</div>

			<!-- form side -->
			<div use:reveal={120} class="bg-paper p-9 md:p-12">
				{#if sent}
					<div class="flex h-full flex-col items-center justify-center text-center">
						<span class="bg-green/15 text-green grid size-16 place-items-center rounded-full">
							<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
								<path d="M4 13l5 5L20 7" stroke-linecap="round" stroke-linejoin="round" />
							</svg>
						</span>
						<h3 class="text-ink mt-6 text-2xl font-semibold">Richiesta inviata!</h3>
						<p class="text-ink/65 mt-2 max-w-xs">
							Ti abbiamo inviato una conferma via email. Ti risponderemo con il preventivo
							entro 24 ore.
						</p>
						<button
							type="button"
							onclick={reset}
							class="text-green mt-6 text-sm font-semibold hover:underline"
						>
							Invia un'altra richiesta
						</button>
					</div>
				{:else}
					<form
						method="POST"
						use:enhance={() => {
							submitting = true;
							generalError = '';
							errors = {};
							return async ({ result, update }) => {
								submitting = false;
								if (result.type === 'success') {
									sent = true;
								} else if (result.type === 'failure') {
									errors = (result.data?.errors as Record<string, string>) ?? {};
									generalError = (result.data?.message as string) ?? '';
								} else if (result.type === 'error') {
									generalError = 'Si è verificato un errore. Riprova tra poco.';
								}
								await update({ reset: false });
							};
						}}
						class="flex flex-col gap-4"
					>
						<!-- honeypot anti-spam -->
						<input
							type="text"
							name="azienda"
							tabindex="-1"
							autocomplete="off"
							aria-hidden="true"
							class="hidden"
						/>

						<div class="grid gap-4 sm:grid-cols-2">
							<label class="flex flex-col gap-1.5">
								<span class="text-ink text-sm font-medium">Nome e cognome</span>
								<input bind:value={nome} name="nome" required type="text" placeholder="Mario Rossi" class={inputClass} />
								{#if errors.nome}<span class="text-clay text-xs">{errors.nome}</span>{/if}
							</label>
							<label class="flex flex-col gap-1.5">
								<span class="text-ink text-sm font-medium">Email</span>
								<input bind:value={email} name="email" required type="email" placeholder="mario@email.it" class={inputClass} />
								{#if errors.email}<span class="text-clay text-xs">{errors.email}</span>{/if}
							</label>
						</div>

						<div class="grid gap-4 sm:grid-cols-2">
							<label class="flex flex-col gap-1.5">
								<span class="text-ink text-sm font-medium">Telefono</span>
								<input bind:value={telefono} name="telefono" required type="tel" placeholder="333 1234567" class={inputClass} />
								{#if errors.telefono}<span class="text-clay text-xs">{errors.telefono}</span>{/if}
							</label>
							<label class="flex flex-col gap-1.5">
								<span class="text-ink text-sm font-medium">Tipo di servizio</span>
								<select bind:value={servizio} name="servizio" class={inputClass}>
									{#each servizi as s (s)}
										<option>{s}</option>
									{/each}
								</select>
							</label>
						</div>

						<div class="grid gap-4 sm:grid-cols-2">
							<label class="flex flex-col gap-1.5">
								<span class="text-ink text-sm font-medium">Da</span>
								<input bind:value={partenza} name="partenza" type="text" placeholder="Città di partenza" class={inputClass} />
							</label>
							<label class="flex flex-col gap-1.5">
								<span class="text-ink text-sm font-medium">A</span>
								<input bind:value={destinazione} name="destinazione" type="text" placeholder="Città di arrivo" class={inputClass} />
							</label>
						</div>

						<label class="flex flex-col gap-1.5">
							<span class="text-ink text-sm font-medium">Messaggio</span>
							<textarea
								bind:value={messaggio}
								name="messaggio"
								rows="3"
								placeholder="Descrivi il tuo trasloco: piano, ascensore, oggetti particolari…"
								class="{inputClass} resize-none"
							></textarea>
						</label>

						{#if generalError}
							<p class="bg-clay/10 text-clay rounded-xl px-4 py-3 text-sm font-medium">{generalError}</p>
						{/if}

						<button
							type="submit"
							disabled={submitting}
							class="group bg-green mt-2 inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-base font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d96f00] disabled:cursor-not-allowed disabled:opacity-60"
						>
							{#if submitting}
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" class="animate-spin">
									<path d="M12 3a9 9 0 1 0 9 9" stroke-linecap="round" />
								</svg>
								Invio in corso…
							{:else}
								Richiedi preventivo gratuito
								<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="transition-transform duration-300 group-hover:translate-x-1">
									<path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round" />
								</svg>
							{/if}
						</button>
						<p class="text-ink/45 text-center text-xs">
							Risposta entro 24 ore · oppure scrivici su
							<a href="https://wa.me/393276920739" target="_blank" rel="noopener" class="text-green font-semibold hover:underline">WhatsApp</a>
						</p>
					</form>
				{/if}
			</div>
		</div>
	</div>
</section>
