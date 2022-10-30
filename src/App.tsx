import { Layout } from './components';
import Router from './router';
import IssueProvider from './constants/IssueProvider';
import StatusProvider from './constants/StatusProvider';

export default function App() {
	return (
		<StatusProvider>
			<IssueProvider>
				<Layout>
					<Router />
				</Layout>
			</IssueProvider>
		</StatusProvider>
	);
}
