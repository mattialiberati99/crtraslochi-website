import type { Action } from 'svelte/action';

/**
 * Adds the `in-view` class once the node scrolls into the viewport,
 * driving the CSS `.reveal` entrance animation. An optional numeric
 * parameter sets a stagger delay (in ms).
 */
export const reveal: Action<HTMLElement, number | undefined> = (node, delay = 0) => {
	node.classList.add('reveal');
	node.style.setProperty('--reveal-delay', `${delay}ms`);

	if (typeof IntersectionObserver === 'undefined') {
		node.classList.add('in-view');
		return;
	}

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (entry.isIntersecting) {
					node.classList.add('in-view');
					observer.unobserve(node);
				}
			}
		},
		{ threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
