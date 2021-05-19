module.exports = {
    /* config options here */
    // target: 'serverless',
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        config.module.rules.push({
            test: /\.md$/,
            use: [
                'json-loader',
                'front-matter-loader',
            ],
        });

        return config;
    },
    future: {
        webpack5: true
    }
};
