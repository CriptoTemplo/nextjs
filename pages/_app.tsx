import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from "next/router";
import HeaderWrapper from "containers/header/headerWrapper";
import ReturnTop from "components/returnTop/returnTop";
import Footer from "containers/footer/footer";
import Home from "pages/home";
import Criptomonedas from "pages/criptomonedas/criptomonedas";
import CryptoData from "pages/cryptoData";
import Exchanges from "pages/exchanges";
import ErrorPage from "pages/errorPage";
import Sitemap from "pages/sitemap/sitemap";
import "components/table/table.scss"
import "containers/header/header.scss"
import "../App.scss"

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
