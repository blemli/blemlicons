module.exports = {
    multipass: true,
    plugins: [
        {
            name: 'preset-default',
            params: {
                overrides: {
                    mergePaths: false,
                    collapseGroups: false,
                    cleanupIds: {
                        remove: false,
                        minify: false,
                    },
                    convertPathData: { floatPrecision: 1 },
                    cleanupNumericValues: { floatPrecision: 1 },
                },
            },
        },
        // Remove Vectornator stuff
        {
            name: 'removeAttrs',
            params: {
                attrs: [
                    'svg:xmlns:vectornator',
                    'xmlns:vectornator',
                    'vectornator:.*',
                ],
            },
        },
        // Remove width + height attributes
        'removeDimensions',
        // Remove all fills
        {
            name: 'removeAttrs',
            params: {
                attrs: ['fill'],
            },
        },
        // Enforce fill=currentColor at root <svg>
        {
            name: 'addAttributesToSVGElement',
            params: {
                attributes: [{ fill: 'currentColor' }],
            },
        },
        'removeEditorsNSData',
    ],
};
