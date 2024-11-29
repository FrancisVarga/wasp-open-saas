import { App } from 'wasp-config';

export const configurePaymentRoutes = (app: App) => {
    const pricingPage = app.page('PricingPage', {
        component: { importDefault: 'PricingPage', from: '@src/payment/PricingPage' }
    });
    app.route('PricingPageRoute', { path: '/pricing', to: pricingPage });

    const checkoutPage = app.page('CheckoutPage', {
        component: { importDefault: 'Checkout', from: '@src/payment/CheckoutPage' },
        authRequired: true
    });
    app.route('CheckoutRoute', { path: '/checkout', to: checkoutPage });
}
