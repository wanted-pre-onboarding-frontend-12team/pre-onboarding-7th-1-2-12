import { useNavigate } from 'react-router-dom';
import { HeaderWrapper } from './styled';

export default function Header() {
	const navigate = useNavigate();

	return (
		<HeaderWrapper>
			<div>
				<svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M13.2988 0C5.95539 0 0 5.95459 0 13.3004C0 19.1758 3.81051 24.1612 9.09555 25.9208C9.76099 26.0424 10.0035 25.6316 10.0035 25.279C10.0035 24.963 9.99205 24.127 9.98551 23.0174C6.28607 23.8208 5.50551 21.2342 5.50551 21.2342C4.90049 19.6976 4.02851 19.2884 4.02851 19.2884C2.82093 18.4638 4.11995 18.4802 4.11995 18.4802C5.45489 18.574 6.15705 19.851 6.15705 19.851C7.34339 21.8832 9.27029 21.2962 10.028 20.9558C10.1488 20.0968 10.4925 19.5106 10.8722 19.1782C7.91901 18.8418 4.81395 17.7012 4.81395 12.6048C4.81395 11.1523 5.33241 9.96595 6.18319 9.03599C6.04603 8.69959 5.58961 7.34749 6.31383 5.51613C6.31383 5.51613 7.42993 5.15851 9.97081 6.87881C11.0314 6.58407 12.1696 6.43711 13.3004 6.43139C14.4304 6.43711 15.5678 6.58407 16.63 6.87881C19.1692 5.15851 20.2836 5.51613 20.2836 5.51613C21.0096 7.34749 20.5532 8.69959 20.4168 9.03599C21.2692 9.96595 21.7836 11.1523 21.7836 12.6048C21.7836 17.7143 18.6736 18.8386 15.7115 19.1676C16.1883 19.5784 16.6137 20.39 16.6137 21.631C16.6137 23.4084 16.5973 24.843 16.5973 25.279C16.5973 25.635 16.8374 26.049 17.5118 25.919C22.7928 24.1564 26.6 19.175 26.6 13.3004C26.6 5.95459 20.6446 0 13.2988 0Z"
						fill="white"
					/>
				</svg>
				<span onClick={() => navigate('/')}>Organization Name / Repository Name</span>
			</div>
		</HeaderWrapper>
	);
}
