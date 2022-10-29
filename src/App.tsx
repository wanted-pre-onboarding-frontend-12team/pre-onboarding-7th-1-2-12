import { ThemeProvider } from 'styled-components';

import { Layout } from './components';
import Router from './router';
import { theme } from './styles';

function App() {
	const isLogged: boolean = Boolean(localStorage.getItem('accessToken'));

	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Router />
			</Layout>
		</ThemeProvider>
	);
}

export default App;
