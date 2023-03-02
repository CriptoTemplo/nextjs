import type { AppProps } from 'next/app'
import HeaderWrapper from "containers/header/headerWrapper";
import ReturnTop from "@/components/returnTop";
import Footer from "containers/footer/footer";
import ReactGA from 'react-ga4';
import React from "react";
import Head from "next/head";
import "@/styles/table.scss"
import "@/styles/header.scss"
import "@/styles/App.scss"
import '@/styles/dropdownMobile.scss';
import '@/styles/footer.scss';
import '@/styles/sitemap.scss';

export default function App({ Component, pageProps }: AppProps) {
	React.useEffect(() => {
		ReactGA.initialize('G-Z3D5DH5P3F');
	  });
	
	// TODO revisar el return TOP
	return (
		<>
		<Head>
			<title>▶️ Cómo empezar a Invertir | Criptomonedas, Trading y Bolsa 🥇</title>
			<meta name="title" content="▶️ Cómo EMPEZAR a INVERTIR | Criptomonedas, Trading y Bolsa 🥇" />
			<meta name="description" content="¿Quieres empezar a invertir? Encontrarás todo lo que necesitas sobre criptomonedas, trading, bolsa y mucho más ✅" />
			<meta property="og:locale" content="es_ES" />
			<meta property="og:type" content="website" />
			<meta property="og:title" content="▶️ Cómo EMPEZAR a INVERTIR | Criptomonedas, Trading y Bolsa 🥇" />
			<meta property="og:description" content="¿Quieres empezar a invertir? Encontrarás todo lo que necesitas sobre criptomonedas, trading, bolsa y mucho más ✅" />
			<meta property="og:site_name" content="Empezar a Invertir" />
			<meta property="og:url" content="https://empezarainvertir.com" />
			<meta property="og:image" content="https://empezarainvertir.com/api/uploads/logo_fe6e7fe36f.png" />
			<meta property="og:locale" content="es_ES" />

			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="robots" content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
		</Head>
		<div className="globalWrapper">
			<HeaderWrapper />
			<div className="wrapperMain">
				<Component {...pageProps} />
			</div>
			<ReturnTop />
			<Footer />
		</div>
		</>
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
