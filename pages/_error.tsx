import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const ErrorPage = () => {
	const router = useRouter();

	useEffect(() => {
		router.replace('/');
	});

	return null;

};

/* Additionally, we're using the getInitialProps method to handle the server-side rendering of the error page.
If there's a server-side error, we're redirecting to the home page using the res.writeHead method. */
ErrorPage.getInitialProps = ({ res }: NextPageContext) => {
	if (res) {
		res.writeHead(302, {
			Location: '/',
		});
		res.end();
	}

	return {};
};

export default ErrorPage;