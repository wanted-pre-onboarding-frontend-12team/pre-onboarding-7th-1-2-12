import { BrowserRouter, Routes, Route } from 'react-router-dom';
import IssueList from './pages/IssueList';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<IssueList />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
