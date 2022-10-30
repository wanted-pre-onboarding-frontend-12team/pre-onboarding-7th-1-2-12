import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyle, theme } from './styles';
import { IssueProvider } from './constants/IssueContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<IssueProvider>
				<GlobalStyle />
				<App />
			</IssueProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
