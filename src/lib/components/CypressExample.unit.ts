import CypressExample from './CypressExample.svelte';

describe('CypressExample', () => {
	it('mounts', () => {
		cy.mount(CypressExample);
	});
});
