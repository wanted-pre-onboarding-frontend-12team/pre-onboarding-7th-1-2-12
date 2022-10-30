import { DefaultTheme } from 'styled-components';

const pixelToRem = (size: number) => `${size / 16}rem`;

const theme: DefaultTheme = {
	maxWidth: pixelToRem(1280),
	media: {
		mobile: pixelToRem(480),
	},
	fontSizes: {
		small: pixelToRem(12),
		normal: pixelToRem(16),
		medium: pixelToRem(20),
		large: pixelToRem(25),
	},
	fontWeights: {
		light: 300,
		normal: 400,
		medium: 500,
		semiBold: 600,
		bold: 700,
		strongBold: 800,
	},
	colors: {
		white: '#FFFFFF',
		lightgray: '#D9D9D9',
		deepgray: '#383535',
		black: '#000000',
	},
	device: {
		laptop: `screen and (min-width: 480px)`,
	},
};

export default theme;
