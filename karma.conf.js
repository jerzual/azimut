module.exports = function(config) {
    config.set({

        frameworks: ["mocha", "chai", "karma-typescript"],

        files: [
            { pattern: "node_modules/expect.js/index.js" },
            { pattern: "src/**/*.ts" }
        ],

        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },

        reporters: ["progress", "karma-typescript"],

        browsers: ["Chrome"]
    });
};