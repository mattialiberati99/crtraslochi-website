<script lang="ts">
	import LegalPage from '$lib/components/LegalPage.svelte';
	import { openPreferences } from '$lib/cookies.svelte';
</script>

<svelte:head>
	<title>Cookie Policy — CR Traslochi</title>
	<meta name="description" content="Informativa estesa sull'uso dei cookie e delle tecnologie di memorizzazione sul sito di CR Traslochi." />
	<meta name="robots" content="noindex" />
</svelte:head>

<LegalPage title="Cookie Policy" updated="26 maggio 2026">
	<p>
		La presente Cookie Policy illustra l'uso dei cookie e delle tecnologie di memorizzazione
		simili sul sito <strong>crtraslochi.it</strong>, in conformità alle Linee guida del Garante
		per la protezione dei dati personali e al Regolamento (UE) 2016/679.
	</p>

	<h2>1. Cosa sono i cookie</h2>
	<p>
		I cookie sono piccoli file di testo che i siti web salvano sul dispositivo dell'utente. Tecnologie
		analoghe (come il <em>localStorage</em>) consentono di memorizzare informazioni direttamente nel
		browser. Vengono utilizzati per far funzionare i siti, migliorarne l'efficienza e fornire
		informazioni ai titolari.
	</p>

	<h2>2. Tipologie di cookie utilizzati</h2>
	<h3>Cookie tecnici / necessari</h3>
	<p>
		Indispensabili per il corretto funzionamento del sito e per memorizzare le scelte espresse
		tramite il banner. Non richiedono consenso. Senza questi cookie il sito non funzionerebbe
		correttamente.
	</p>
	<h3>Cookie statistici</h3>
	<p>
		Raccolgono informazioni in forma aggregata e anonima sull'utilizzo del sito (pagine più visitate,
		eventuali errori). Vengono attivati <strong>solo previo consenso</strong>.
	</p>
	<h3>Cookie di marketing</h3>
	<p>
		Utilizzati per tracciare la navigazione e mostrare comunicazioni e annunci pertinenti, anche su
		siti di terzi. Vengono attivati <strong>solo previo consenso</strong>.
	</p>

	<h2>3. Cookie e strumenti attualmente presenti</h2>
	<div class="not-prose my-6 overflow-x-auto">
		<table class="w-full border-collapse text-left text-sm">
			<thead>
				<tr class="border-ink/15 border-b">
					<th class="py-3 pr-4 font-semibold text-ink">Nome</th>
					<th class="py-3 pr-4 font-semibold text-ink">Finalità</th>
					<th class="py-3 pr-4 font-semibold text-ink">Durata</th>
					<th class="py-3 font-semibold text-ink">Categoria</th>
				</tr>
			</thead>
			<tbody class="text-ink/70">
				<tr class="border-ink/8 border-b">
					<td class="py-3 pr-4 font-mono text-xs">cr-cookie-consent</td>
					<td class="py-3 pr-4">Memorizza le preferenze sui cookie espresse dall'utente</td>
					<td class="py-3 pr-4">Persistente (localStorage)</td>
					<td class="py-3">Necessario</td>
				</tr>
			</tbody>
		</table>
	</div>
	<p class="text-ink/60 text-sm">
		Al momento il sito non installa cookie statistici o di marketing di terze parti. Qualora
		venissero introdotti, saranno attivati solo dopo il tuo consenso e questa tabella verrà
		aggiornata.
	</p>

	<h2>4. Gestione delle preferenze</h2>
	<p>
		Puoi modificare in qualsiasi momento le tue scelte sui cookie tramite il pannello dedicato:
	</p>
	<div class="not-prose my-5">
		<button
			type="button"
			onclick={openPreferences}
			class="bg-forest text-paper hover:bg-pine inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
				<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
				<path d="M19.4 13a1.6 1.6 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.6 1.6 0 00-2.7 1.1V21a2 2 0 11-4 0v-.2A1.6 1.6 0 005 19.4l-.1.1a2 2 0 11-2.8-2.8l.1-.1A1.6 1.6 0 003 13H3a2 2 0 110-4h.1A1.6 1.6 0 004.6 5l-.1-.1a2 2 0 112.8-2.8l.1.1A1.6 1.6 0 0010 3.6V3a2 2 0 114 0v.1A1.6 1.6 0 0019 4.6l.1-.1a2 2 0 112.8 2.8l-.1.1a1.6 1.6 0 00-.4 1.4z" stroke-linecap="round" stroke-linejoin="round" />
			</svg>
			Gestisci preferenze cookie
		</button>
	</div>

	<h2>5. Disabilitazione tramite browser</h2>
	<p>
		Puoi gestire o disabilitare i cookie anche dalle impostazioni del tuo browser. Di seguito le
		guide ufficiali:
	</p>
	<ul>
		<li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Google Chrome</a></li>
		<li><a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noopener">Mozilla Firefox</a></li>
		<li><a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Apple Safari</a></li>
		<li><a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noopener">Microsoft Edge</a></li>
	</ul>

	<h2>6. Maggiori informazioni</h2>
	<p>
		Per il trattamento dei dati personali consulta la nostra <a href="/privacy">Privacy Policy</a>.
		Per qualsiasi domanda scrivi a <a href="mailto:info@crtraslochi.it">info@crtraslochi.it</a>.
	</p>
</LegalPage>
