const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			...colors,
			primary: {
				normal: '#78716c',
				fairy: '#f472b6'
			},
			primaryHover: {
				normal: '#57534e',
				fairy: '#ec4899'
			},
			secondary: {
				normal: '#9ca3af',
				fairy: '#e879f9'
			},
			secondaryHover: {
				normal: '#6b7280',
				fairy: '#d946ef'
			}
		}
	},
	plugins: []
};
