// ./pages/_document.js
// Needed for importing static files as css or imagens.
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html>
                <Head>
                    {/* <link rel="stylesheet" href="/static/bulma.min.css" /> */}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}