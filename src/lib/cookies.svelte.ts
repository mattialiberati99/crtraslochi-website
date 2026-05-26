import { browser } from '$app/environment';

/**
 * GDPR cookie-consent state, shared across the app.
 *
 * Only "necessary" cookies (the consent preference itself) are used today.
 * The `analytics` and `marketing` flags gate any future optional scripts:
 * read them before loading e.g. Google Analytics or Meta Pixel.
 */

const STORAGE_KEY = 'cr-cookie-consent';
const VERSION = 1;

type StoredConsent = {
	version: number;
	date: string;
	analytics: boolean;
	marketing: boolean;
};

export const consent = $state({
	/** Has the user made an explicit choice yet? */
	decided: false,
	/** Is the detailed preferences panel open? */
	open: false,
	analytics: false,
	marketing: false
});

export function loadConsent(): void {
	if (!browser) return;
	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (!raw) return;
		const parsed = JSON.parse(raw) as StoredConsent;
		if (parsed.version !== VERSION) return; // policy changed → ask again
		consent.analytics = Boolean(parsed.analytics);
		consent.marketing = Boolean(parsed.marketing);
		consent.decided = true;
	} catch {
		/* corrupted value → treat as no decision */
	}
}

function persist(): void {
	if (!browser) return;
	const data: StoredConsent = {
		version: VERSION,
		date: new Date().toISOString(),
		analytics: consent.analytics,
		marketing: consent.marketing
	};
	localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
	consent.decided = true;
}

export function acceptAll(): void {
	consent.analytics = true;
	consent.marketing = true;
	persist();
	consent.open = false;
}

export function rejectAll(): void {
	consent.analytics = false;
	consent.marketing = false;
	persist();
	consent.open = false;
}

export function savePreferences(): void {
	persist();
	consent.open = false;
}

export function openPreferences(): void {
	consent.open = true;
}
