import { App } from 'wasp-config';

export const configurePaymentQueries = (app: App) => {
    app.query('getCustomerPortalUrl', {
        fn: { import: 'getCustomerPortalUrl', from: '@src/payment/operations' },
        entities: ['User']
    });
}
