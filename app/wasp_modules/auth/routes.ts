import { App } from 'wasp-config';

export const configureAuthRoutes = (app: App) => {
    const loginPage = app.page('LoginPage', {
        component: { importDefault: 'Login', from: '@src/auth/LoginPage' }
    });
    app.route('LoginRoute', { path: '/login', to: loginPage });

    const signupPage = app.page('SignupPage', {
        component: { import: 'Signup', from: '@src/auth/SignupPage' }
    });
    app.route('SignupRoute', { path: '/signup', to: signupPage });

    const requestPasswordResetPage = app.page('RequestPasswordResetPage', {
        component: { import: 'RequestPasswordResetPage', from: '@src/auth/email-and-pass/RequestPasswordResetPage' }
    });
    app.route('RequestPasswordResetRoute', { path: '/request-password-reset', to: requestPasswordResetPage });

    const passwordResetPage = app.page('PasswordResetPage', {
        component: { import: 'PasswordResetPage', from: '@src/auth/email-and-pass/PasswordResetPage' }
    });
    app.route('PasswordResetRoute', { path: '/password-reset', to: passwordResetPage });

    const emailVerificationPage = app.page('EmailVerificationPage', {
        component: { import: 'EmailVerificationPage', from: '@src/auth/email-and-pass/EmailVerificationPage' }
    });
    app.route('EmailVerificationRoute', { path: '/email-verification', to: emailVerificationPage });

    const accountPage = app.page('AccountPage', {
        component: { importDefault: 'Account', from: '@src/user/AccountPage' },
        authRequired: true
    });
    app.route('AccountRoute', { path: '/account', to: accountPage });
}
