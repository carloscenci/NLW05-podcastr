import Document, { Html, Head, Main, NextScript } from 'next/document';

const APP_NAME = 'Podcastr'
const APP_DESCRIPTION = 'This is an example of using next-pwa plugin in '

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />
                
                    <meta name='apple-mobile-web-app-capable' content='yes' />
                    <meta name='apple-mobile-web-app-status-bar-style' content='default' />
                    <meta name='apple-mobile-web-app-title' content={APP_NAME} />
                    <meta name='description' content={APP_DESCRIPTION} />
                    <meta name='format-detection' content='telephone=no' />
                    <meta name='mobile-web-app-capable' content='yes' />
                    <link rel="icon" href="/android-chrome-64x64.png" sizes="64x64" />
                    <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" />
                    <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" />
                    <link rel='manifest' href='manifest.json' />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
                    <script
                        async
                        src="https://unpkg.com/pwacompat"
                        crossOrigin="anonymous"></script>
                    
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}