import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	return (
		<Html lang="es">
			<Head>
				<meta charSet="UTF-8" />
				<meta name="theme-color" content="#100f0e" media="(prefers-color-scheme: dark)" />
				<meta name="keywords" content="invertir, criptomonedas, bolsa, trading" lang="es" />

				{/*Favicons*/}
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
				<link rel="shortcut icon" href="/favicon.ico" />
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="msapplication-config" content="/browserconfig.xml" />
				<meta name="theme-color" content="#ffffff" />

				<Script async strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-Z3D5DH5P3F" />
				<Script async strategy="afterInteractive" id="googleTag"
					dangerouslySetInnerHTML={{
						__html: 
						`
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-Z3D5DH5P3F');
						`,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
