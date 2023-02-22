import type { AppProps } from 'next/app'
import HeaderWrapper from "containers/header/headerWrapper";
import ReturnTop from "@/components/returnTop";
import Footer from "containers/footer/footer";
import "../styles/table.scss"
import "../styles/header.scss"
import "../styles/App.scss"
import '../styles/dropdownMobile.scss';
import '../styles/footer.scss';
import '../styles/sitemap.scss';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<div className="globalWrapper">
			<HeaderWrapper />
			<div className="wrapperMain">
				<Component {...pageProps} />
			</div>
			<ReturnTop />
			<Footer />
		</div>
	);
}

/*
export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	return (
		<div className="globalWrapper">
			<HeaderWrapper />
			<div className="wrapperMain">
				{router.pathname === '/' && <Home />}
				{router.pathname === '/criptomonedas' && <Criptomonedas />}
				{router.pathname === '/criptomonedas/[post]' && <CryptoData />}
				{router.pathname === '/exchanges' && <Exchanges />}
				{router.pathname === '/sitemap' && <Sitemap />}
				{router.pathname === '*' && <ErrorPage />}
			</div>
			<ReturnTop />
			<Footer />
		</div>
	);
}
*/
