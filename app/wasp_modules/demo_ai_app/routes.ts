import { App } from 'wasp-config';

export const configureDemoAiAppRoutes = (app: App) => {
    const demoAppPage = app.page('DemoAppPage', {
        component: { importDefault: 'DemoAppPage', from: '@src/demo-ai-app/DemoAppPage' },
        authRequired: true
    });
    app.route('DemoAppRoute', { path: '/demo-app', to: demoAppPage });
}
