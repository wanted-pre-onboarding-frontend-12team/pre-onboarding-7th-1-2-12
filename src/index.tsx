import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyle, theme } from './styles';
import { IssueProvider } from './constants/IssueContext';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={theme}>
				<IssueProvider>
					<GlobalStyle />
					<App />
				</IssueProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>,
);
