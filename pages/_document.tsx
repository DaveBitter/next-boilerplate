// Libs
import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from "next/document";

// Utils
import meta from '../meta.config.js';
// Resources

// Components

// Component
class Document extends NextDocument {
    render() {
        return <Html lang={meta.locale}>
            <Head>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>

        </Html>
    }
}

export default Document;
