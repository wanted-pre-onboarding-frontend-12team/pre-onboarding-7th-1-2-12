import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div>
			<h1>Page Not Found</h1>
			<h3>Looks like you've followed a broken link or entered a URL that doesn't exist on this site</h3>
			<Link to="/">Back to our site</Link>
		</div>
	);
}
