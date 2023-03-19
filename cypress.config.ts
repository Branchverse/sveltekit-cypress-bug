import { defineConfig } from 'cypress';

export default defineConfig({
	component: {
		setupNodeEvents(on, config) {
			return Object.assign({}, config);
		},
		devServer: {
			framework: 'svelte',
			bundler: 'vite',
		},
		// devServer(cypressConfig) {
		// 	// return devServer instance or a promise that resolves to
		// 	// a dev server here
		// 	return {
		// 		port: 5173,
		// 		framework: 'svelte',
		// 		bundler: 'vite',
		// 		cypressConfig,
		// 		close: () => {
		// 			console.log('!');
		// 		},
		// 	};
		// },
		specPattern: 'src/**/*.{cy,unit}.{js,jsx,ts,tsx}',
	},
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
		// baseUrl: 'http://localhost:5173',
		specPattern: 'cypress/**/*cy.{js,jsx,ts,tsx}',
	},
	viewportWidth: 1920,
	viewportHeight: 1080,
});
