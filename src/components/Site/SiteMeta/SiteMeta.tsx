// Libs
import React from 'react';
import Head from 'next/head';

// Utils

// Resources

// Components

// Interface
interface IProps {
    title: string,
    description: string,
    image?: string | null,
    themeColor: string,
    locale: string,
    author?: string | null,
    twitterHandle?: string | null,
    keywords: string,
    domain: string
}

// Component
const SiteMeta = ({ title, description, image, themeColor, locale, author, twitterHandle, keywords, domain }: IProps) => {
    return <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta httpEquiv='content-language' content={locale} />
        <meta name='viewport' id='viewporttag' content='width=device-width, user-scalable=no, initial-scale=1' />

        <link rel='apple-touch-icon' sizes='57x57' href='/static/img/favicons/apple-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/static/img/favicons/apple-icon-60x60.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/static/img/favicons/apple-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/static/img/favicons/apple-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/static/img/favicons/apple-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/static/img/favicons/apple-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/static/img/favicons/apple-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/static/img/favicons/apple-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/static/img/favicons/apple-icon-180x180.png' />
        <link rel='icon' type='image/png' sizes='192x192' href='/static/img/favicons/android-icon-192x192.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/img/favicons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='96x96' href='/static/img/favicons/favicon-96x96.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/img/favicons/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />

        <meta name='msapplication-TileColor' content={themeColor} />
        <meta name='msapplication-TileImage' content='/static/img/favicons/ms-icon-144x144.png' />

        <meta name='theme-color' content={themeColor}></meta>

        <title>{title}</title>
        <meta name='description' content={description} />

        {image && <meta property='og:image' content={image} />}
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:site_name' content={title} />
        <meta property='og:locale' content={locale} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content={domain} />
        {author && <meta property='article:author' content={author} />}
        {author && <meta property='article:publisher' content={author} />}
        <meta name='keywords' content={keywords} />

        {image && <meta name='twitter:card' content={image} />}
        {twitterHandle && <meta name='twitter:site' content={twitterHandle} />}
        {twitterHandle && <meta name='twitter:creator' content={twitterHandle} />}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={`${domain}${image}`} />}
    </Head>
};

// Props
SiteMeta.defaultProps = {};

export default SiteMeta;
