module.exports = {
	purge: [
		'./src/pages/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				cyan: 'hsl(179, 62%, 43%)',
				brightYellow: 'hsl(71, 73%, 54%)',
				lightGray: 'hsl(204, 43%, 93%)',
				grayishBlue: 'hsl(218, 22%, 67%)',
			},
			fontFamily: {
				sans: ['Karla', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
