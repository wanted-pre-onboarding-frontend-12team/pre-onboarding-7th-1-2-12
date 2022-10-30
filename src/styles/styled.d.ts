import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		media: {
			mobile: string;
		};
		maxWidth: string;
		fontSizes: {
			small: string;
			normal: string;
			medium: string;
			large: string;
		};
		fontWeights: {
			light: 300;
			normal: 400;
			medium: 500;
			semiBold: 600;
			bold: 700;
			strongBold: 800;
		};
		colors: {
			white: '#FFFFFF';
			lightgray: '#D9D9D9';
			deepgray: '#383535';
			black: '#000000';
		};
		device: {
			laptop: string;
		};
	}
}
