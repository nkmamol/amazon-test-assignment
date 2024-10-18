import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';
import * as addCucumberPreprocessorPlugin from '@badeball/cypress-cucumber-preprocessor';

export default defineConfig({
    e2e: {
        // Path to your .feature files
        specPattern: "cypress/e2e/**/*.feature",
        reporter: 'cypress-mochawesome-reporter', // Set the reporter to cypress-mochawesome-reporter
        reporterOptions: {
            reportDir: 'cypress/reports',  // Directory to save the reports
            reportPageTitle: 'Amazon Product Search Report',
            reportFilename: 'amazon-product-search-report',
            overwrite: true,              // Do not overwrite existing reports
            html: true,                    // Generate HTML reports
            json: false,                    // Generate JSON reports
            charts: true,                  // Include charts in the report
            embeddedScreenshots: true,     // Include screenshots in the report
            inlineAssets: true,            // Include assets inline in the report
            code: false,
        },
        async setupNodeEvents(on, config) {
        // Create the esbuild bundler with the Cucumber preprocessor plugin
        const bundler = createBundler({
            plugins: [createEsbuildPlugin(config)],
        });

        // Use esbuild for file preprocessing
        on('file:preprocessor', bundler);

        // Add the Cucumber preprocessor plugin to Cypress
        await addCucumberPreprocessorPlugin.addCucumberPreprocessorPlugin(on, config);
        require('cypress-mochawesome-reporter/plugin')(on);

        return config;
        },
        baseUrl: 'https://www.amazon.co.uk', // Base URL for your tests
        supportFile: 'cypress/support/index.ts',
    },
});
