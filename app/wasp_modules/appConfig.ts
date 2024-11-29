import { App } from 'wasp-config';

export const createApp = () => {
    const app = new App('OpenSaaS', {
        title: 'My Open SaaS App',
        wasp: { version: '^0.15.2' },
        head: [
            "<meta charset='utf-8' />",
            "<meta name='description' content='Your apps main description and features.' />",
            "<meta name='author' content='Your (App) Name' />",
            "<meta name='keywords' content='saas, solution, product, app, service' />",
            "<meta property='og:type' content='website' />",
            "<meta property='og:title' content='Your Open SaaS App' />",
            "<meta property='og:site_name' content='Your Open SaaS App' />",
            "<meta property='og:url' content='https://your-saas-app.com' />",
            "<meta property='og:description' content='Your apps main description and features.' />",
            "<meta property='og:image' content='https://your-saas-app.com/public-banner.webp' />",
            "<meta name='twitter:image' content='https://your-saas-app.com/public-banner.webp' />",
            "<meta name='twitter:image:width' content='800' />",
            "<meta name='twitter:image:height' content='400' />",
            "<meta name='twitter:card' content='summary_large_image' />",
            "<script defer data-domain='<your-site-id>' src='https://plausible.io/js/script.js'></script>",
            "<script defer data-domain='<your-site-id>' src='https://plausible.io/js/script.local.js'></script>",
        ]
    });

    app.db({
        seeds: [
            { import: 'seedMockUsers', from: '@src/server/scripts/dbSeeds' }
        ]
    });

    app.client({
        rootComponent: { importDefault: 'App', from: '@src/client/App' }
    });

    app.emailSender({
        provider: 'Dummy',
        defaultFrom: {
            name: "Open SaaS App",
            email: "me@example.com"
        }
    });

    return app;
}
