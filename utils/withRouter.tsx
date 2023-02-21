import { useLocation, useNavigate, useParams } from "react-router-dom";

const history: string [] = [];
 
export interface WithRouter {
	location: ReturnType<typeof useLocation>;
	navigate: ReturnType<typeof useNavigate>;
	params: ReturnType<typeof useParams>;
	navigateWrapped: (url: string) => void;
	checkHistory: (key: string) => boolean;
}

const withRouter = <P extends {}>(Component: React.ComponentType<P>) => (
	props: Omit<P, keyof WithRouter>
) => {
	const location = useLocation();
	const navigate = useNavigate();
	const params = useParams();

	const navigateWrapped = (url: string) => {
		if (url !== location.pathname) {
			history.push(location.key);
			return navigate(url);
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}

	const checkHistory = (key: string) => {
		return history.includes(key);
	}

	return <Component {...(props as P)} {...{ location, navigate, params, navigateWrapped, checkHistory }} />;
};

export default withRouter;
