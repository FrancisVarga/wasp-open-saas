import { App } from 'wasp-config';

export const configurePaymentActions = (app: App) => {
    app.action('generateCheckoutSession', {
        fn: { import: 'generateCheckoutSession', from: '@src/payment/operations' },
        entities: ['User']
    });

    app.api('paymentsWebhook', {
        fn: { import: 'paymentsWebhook', from: '@src/payment/webhook' },
        entities: ['User'],
        middlewareConfigFn: { import: 'paymentsMiddlewareConfigFn', from: '@src/payment/webhook' },
        httpRoute: ['POST', '/payments-webhook']
    });
}
