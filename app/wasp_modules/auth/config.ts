import { App } from 'wasp-config';

export const configureAuth = (app: App) => {
    app.auth({
        userEntity: 'User',
        methods: {
            email: {
                fromField: {
                    name: "Open SaaS App",
                    email: "me@example.com"
                },
                emailVerification: {
                    clientRoute: 'EmailVerificationRoute',
                    getEmailContentFn: { import: 'getVerificationEmailContent', from: '@src/auth/email-and-pass/emails' }
                },
                passwordReset: {
                    clientRoute: 'PasswordResetRoute',
                    getEmailContentFn: { import: 'getPasswordResetEmailContent', from: '@src/auth/email-and-pass/emails' }
                },
                userSignupFields: { import: 'getEmailUserFields', from: '@src/auth/userSignupFields' }
            }
        },
        onAfterSignup: { import: 'onAfterSignup', from: '@src/auth/hooks' },
        onAuthFailedRedirectTo: '/login',
        onAuthSucceededRedirectTo: '/demo-app'
    });
}
