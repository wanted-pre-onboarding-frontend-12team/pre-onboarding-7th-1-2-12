import { Layout } from './components';
import Router from './router';
import IssueProvider from './constants/IssueProvider';
export default function App() {
	return (
		<IssueProvider>
			<Layout />
			<Router />
		</IssueProvider>
	);
}
