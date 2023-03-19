/// <reference types="cypress" />

declare namespace Cypress {
	interface Chainable<Subject> {
		mount: (component: JSX.Element, options?: MountOptions<T>) => Chainable<T>;
	}
}
