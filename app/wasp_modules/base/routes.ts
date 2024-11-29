import { App } from 'wasp-config';

export const configureBaseRoutes = (app: App) => {
    const landingPage = app.page('LandingPage', {
        component: { importDefault: 'LandingPage', from: '@src/landing-page/LandingPage' }
    });
    app.route('LandingPageRoute', { path: '/', to: landingPage });

    const notFoundPage = app.page('NotFoundPage', {
        component: { import: 'NotFoundPage', from: '@src/client/components/NotFoundPage' }
    });
    app.route('NotFoundRoute', { path: '*', to: notFoundPage });
}
