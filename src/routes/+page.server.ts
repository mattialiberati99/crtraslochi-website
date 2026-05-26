import { fail } from '@sveltejs/kit';
import { Resend } from 'resend';
import { env } from '$env/dynamic/private';
import type { Actions } from './$types';

const SERVIZI = [
	'Trasloco completo',
	'Imballaggio',
	'Montaggio mobili',
	'Trasporto',
	'Sgombero',
	'Altro'
];

function esc(value: string): string {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/\n/g, '<br />');
}

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const nome = (data.get('nome') ?? '').toString().trim();
		const email = (data.get('email') ?? '').toString().trim();
		const telefono = (data.get('telefono') ?? '').toString().trim();
		const servizio = (data.get('servizio') ?? '').toString().trim();
		const partenza = (data.get('partenza') ?? '').toString().trim();
		const destinazione = (data.get('destinazione') ?? '').toString().trim();
		const messaggio = (data.get('messaggio') ?? '').toString().trim();
		// Honeypot anti-spam: bots fill hidden fields, humans don't.
		const trap = (data.get('azienda') ?? '').toString();

		const values = { nome, email, telefono, servizio, partenza, destinazione, messaggio };

		const errors: Record<string, string> = {};
		if (!nome) errors.nome = 'Inserisci il tuo nome.';
		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
			errors.email = 'Inserisci un indirizzo email valido.';
		if (!telefono) errors.telefono = 'Inserisci un recapito telefonico.';
		if (servizio && !SERVIZI.includes(servizio)) errors.servizio = 'Servizio non valido.';

		if (Object.keys(errors).length > 0) {
			return fail(400, { errors, values });
		}

		// Silently accept spam so bots don't retry, but send nothing.
		if (trap) return { success: true };

		const apiKey = env.RESEND_API_KEY;
		const from = env.EMAIL_FROM || 'CR Traslochi <preventivi@crtraslochi.it>';
		const adminTo = env.EMAIL_TO || 'info@crtraslochi.it';

		if (!apiKey) {
			console.error('RESEND_API_KEY mancante: impossibile inviare le email.');
			return fail(500, {
				values,
				message: 'Servizio email non configurato. Chiamaci al 327 692 0739.'
			});
		}

		const resend = new Resend(apiKey);

		const riepilogo = `
			<table style="border-collapse:collapse;font-size:15px;color:#1a1a18">
				<tr><td style="padding:4px 16px 4px 0;color:#6b6b66">Nome</td><td><strong>${esc(nome)}</strong></td></tr>
				<tr><td style="padding:4px 16px 4px 0;color:#6b6b66">Email</td><td>${esc(email)}</td></tr>
				<tr><td style="padding:4px 16px 4px 0;color:#6b6b66">Telefono</td><td>${esc(telefono)}</td></tr>
				<tr><td style="padding:4px 16px 4px 0;color:#6b6b66">Servizio</td><td>${esc(servizio || '—')}</td></tr>
				<tr><td style="padding:4px 16px 4px 0;color:#6b6b66">Da</td><td>${esc(partenza || '—')}</td></tr>
				<tr><td style="padding:4px 16px 4px 0;color:#6b6b66">A</td><td>${esc(destinazione || '—')}</td></tr>
				<tr><td style="padding:4px 16px 4px 0;color:#6b6b66;vertical-align:top">Note</td><td>${esc(messaggio || '—')}</td></tr>
			</table>`;

		try {
			// 1) Notifica all'azienda (con reply-to del cliente)
			const adminRes = await resend.emails.send({
				from,
				to: adminTo,
				replyTo: email,
				subject: `Nuova richiesta preventivo — ${nome}`,
				html: `
					<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:auto">
						<h2 style="color:#1a1a18;margin:0 0 4px">Nuova richiesta di preventivo</h2>
						<p style="color:#6b6b66;margin:0 0 20px">Ricevuta dal sito crtraslochi.it</p>
						${riepilogo}
						<p style="margin-top:24px;font-size:13px;color:#9a9a94">Rispondi a questa email per contattare direttamente ${esc(nome)}.</p>
					</div>`
			});

			if (adminRes.error) {
				console.error('Resend (admin) error:', adminRes.error);
				return fail(500, {
					values,
					message: 'Invio non riuscito. Riprova o chiamaci al 327 692 0739.'
				});
			}

			// 2) Conferma automatica al cliente
			await resend.emails.send({
				from,
				to: email,
				subject: 'Abbiamo ricevuto la tua richiesta — CR Traslochi',
				html: `
					<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:auto;color:#1a1a18">
						<h2 style="margin:0 0 8px">Grazie ${esc(nome)}! 👋</h2>
						<p style="line-height:1.6;color:#3a3a36">
							Abbiamo ricevuto la tua richiesta di preventivo. Il nostro team la sta già
							guardando e ti risponderà <strong>entro 24 ore</strong>.
						</p>
						<div style="background:#f3efe7;border-radius:14px;padding:18px 20px;margin:18px 0">
							<p style="margin:0 0 10px;font-weight:bold">Riepilogo della tua richiesta</p>
							${riepilogo}
						</div>
						<p style="line-height:1.6;color:#3a3a36">
							Per qualsiasi urgenza puoi chiamarci al
							<a href="tel:+393276920739" style="color:#ef7c00;font-weight:bold;text-decoration:none">+39 327 692 0739</a>.
						</p>
						<p style="margin-top:24px;color:#1a1a18"><strong>CR Traslochi</strong><br />
						<span style="color:#6b6b66">Via Carlo Alberto 55, Villafranca (VR)</span></p>
					</div>`
			});

			return { success: true };
		} catch (err) {
			console.error('Errore invio email:', err);
			return fail(500, {
				values,
				message: 'Si è verificato un errore. Riprova o chiamaci al 327 692 0739.'
			});
		}
	}
};
