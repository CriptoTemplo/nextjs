import { useRouter } from 'next/router';

const history: string[] = [];

export interface WithRouter {
	router: ReturnType<typeof useRouter>;
	params: ReturnType<typeof useRouter>['query'];
	navigateWrapped: (url: string) => void;
	checkHistory: (key: string) => boolean;
}

// eslint-disable-next-line react/display-name
const withRouter = <P extends {}>(Component: React.ComponentType<P>) => (
	props: Omit<P, keyof WithRouter>
) => {
	const router = useRouter();
	const params = router.query;

	const navigateWrapped = (url: string) => {
		if (url !== router.pathname) {
			history.push(router.asPath);
			return router.push(url);
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const checkHistory = (key: string) => {
		return history.includes(key);
	};

	return (
		<Component
			{...(props as P)}
			{...{ router, params, navigateWrapped, checkHistory }}
		/>
	);
};

export default withRouter;