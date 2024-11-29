import { App } from 'wasp-config';

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

// Routes and Pages
const landingPage = app.page('LandingPage', {
    component: { importDefault: 'LandingPage', from: '@src/landing-page/LandingPage' }
});
app.route('LandingPageRoute', { path: '/', to: landingPage });

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

// User Operations
app.query('getPaginatedUsers', {
    fn: { import: 'getPaginatedUsers', from: '@src/user/operations' },
    entities: ['User']
});

app.action('updateCurrentUser', {
    fn: { import: 'updateCurrentUser', from: '@src/user/operations' },
    entities: ['User']
});

app.action('updateUserById', {
    fn: { import: 'updateUserById', from: '@src/user/operations' },
    entities: ['User']
});

// Demo AI App
const demoAppPage = app.page('DemoAppPage', {
    component: { importDefault: 'DemoAppPage', from: '@src/demo-ai-app/DemoAppPage' },
    authRequired: true
});
app.route('DemoAppRoute', { path: '/demo-app', to: demoAppPage });

app.action('generateGptResponse', {
    fn: { import: 'generateGptResponse', from: '@src/demo-ai-app/operations' },
    entities: ['User', 'Task', 'GptResponse']
});

app.action('createTask', {
    fn: { import: 'createTask', from: '@src/demo-ai-app/operations' },
    entities: ['Task']
});

app.action('deleteTask', {
    fn: { import: 'deleteTask', from: '@src/demo-ai-app/operations' },
    entities: ['Task']
});

app.action('updateTask', {
    fn: { import: 'updateTask', from: '@src/demo-ai-app/operations' },
    entities: ['Task']
});

app.query('getGptResponses', {
    fn: { import: 'getGptResponses', from: '@src/demo-ai-app/operations' },
    entities: ['User', 'GptResponse']
});

app.query('getAllTasksByUser', {
    fn: { import: 'getAllTasksByUser', from: '@src/demo-ai-app/operations' },
    entities: ['Task']
});

// Payment
const pricingPage = app.page('PricingPage', {
    component: { importDefault: 'PricingPage', from: '@src/payment/PricingPage' }
});
app.route('PricingPageRoute', { path: '/pricing', to: pricingPage });

const checkoutPage = app.page('CheckoutPage', {
    component: { importDefault: 'Checkout', from: '@src/payment/CheckoutPage' },
    authRequired: true
});
app.route('CheckoutRoute', { path: '/checkout', to: checkoutPage });

app.query('getCustomerPortalUrl', {
    fn: { import: 'getCustomerPortalUrl', from: '@src/payment/operations' },
    entities: ['User']
});

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

// File Upload
const fileUploadPage = app.page('FileUploadPage', {
    component: { importDefault: 'FileUpload', from: '@src/file-upload/FileUploadPage' },
    authRequired: true
});
app.route('FileUploadRoute', { path: '/file-upload', to: fileUploadPage });

app.action('createFile', {
    fn: { import: 'createFile', from: '@src/file-upload/operations' },
    entities: ['User', 'File']
});

app.query('getAllFilesByUser', {
    fn: { import: 'getAllFilesByUser', from: '@src/file-upload/operations' },
    entities: ['User', 'File']
});

app.query('getDownloadFileSignedURL', {
    fn: { import: 'getDownloadFileSignedURL', from: '@src/file-upload/operations' },
    entities: ['User', 'File']
});

// Analytics
app.query('getDailyStats', {
    fn: { import: 'getDailyStats', from: '@src/analytics/operations' },
    entities: ['User', 'DailyStats']
});

app.job('dailyStatsJob', {
    executor: 'PgBoss',
    perform: {
        fn: { import: 'calculateDailyStats', from: '@src/analytics/stats' }
    },
    schedule: {
        cron: "0 * * * *"
    },
    entities: ['User', 'DailyStats', 'Logs', 'PageViewSource']
});

// Admin Dashboard
const analyticsDashboardPage = app.page('AnalyticsDashboardPage', {
    component: { importDefault: 'AnalyticsDashboardPage', from: '@src/admin/dashboards/analytics/AnalyticsDashboardPage' },
    authRequired: true
});
app.route('AdminRoute', { path: '/admin', to: analyticsDashboardPage });

const adminUsersPage = app.page('AdminUsersPage', {
    component: { importDefault: 'AdminUsers', from: '@src/admin/dashboards/users/UsersDashboardPage' },
    authRequired: true
});
app.route('AdminUsersRoute', { path: '/admin/users', to: adminUsersPage });

const adminSettingsPage = app.page('AdminSettingsPage', {
    component: { importDefault: 'AdminSettings', from: '@src/admin/elements/settings/SettingsPage' },
    authRequired: true
});
app.route('AdminSettingsRoute', { path: '/admin/settings', to: adminSettingsPage });

const adminChartsPage = app.page('AdminChartsPage', {
    component: { importDefault: 'AdminCharts', from: '@src/admin/elements/charts/ChartsPage' },
    authRequired: true
});
app.route('AdminChartsRoute', { path: '/admin/chart', to: adminChartsPage });

const adminFormElementsPage = app.page('AdminFormElementsPage', {
    component: { importDefault: 'AdminForms', from: '@src/admin/elements/forms/FormElementsPage' },
    authRequired: true
});
app.route('AdminFormElementsRoute', { path: '/admin/forms/form-elements', to: adminFormElementsPage });

const adminFormLayoutsPage = app.page('AdminFormLayoutsPage', {
    component: { importDefault: 'AdminForms', from: '@src/admin/elements/forms/FormLayoutsPage' },
    authRequired: true
});
app.route('AdminFormLayoutsRoute', { path: '/admin/forms/form-layouts', to: adminFormLayoutsPage });

const adminCalendarPage = app.page('AdminCalendarPage', {
    component: { importDefault: 'AdminCalendar', from: '@src/admin/elements/calendar/CalendarPage' },
    authRequired: true
});
app.route('AdminCalendarRoute', { path: '/admin/calendar', to: adminCalendarPage });

const adminUIAlertsPage = app.page('AdminUIAlertsPage', {
    component: { importDefault: 'AdminUI', from: '@src/admin/elements/ui-elements/AlertsPage' },
    authRequired: true
});
app.route('AdminUIAlertsRoute', { path: '/admin/ui/alerts', to: adminUIAlertsPage });

const adminUIButtonsPage = app.page('AdminUIButtonsPage', {
    component: { importDefault: 'AdminUI', from: '@src/admin/elements/ui-elements/ButtonsPage' },
    authRequired: true
});
app.route('AdminUIButtonsRoute', { path: '/admin/ui/buttons', to: adminUIButtonsPage });

const notFoundPage = app.page('NotFoundPage', {
    component: { import: 'NotFoundPage', from: '@src/client/components/NotFoundPage' }
});
app.route('NotFoundRoute', { path: '*', to: notFoundPage });

// Messages
const adminMessagesPage = app.page('AdminMessagesPage', {
    component: { importDefault: 'AdminMessages', from: '@src/messages/MessagesPage' },
    authRequired: true
});
app.route('AdminMessagesRoute', { path: '/admin/messages', to: adminMessagesPage });

// Newsletter
app.job('sendNewsletter', {
    executor: 'PgBoss',
    perform: {
        fn: { import: 'checkAndQueueNewsletterEmails', from: '@src/newsletter/sendNewsletter' }
    },
    schedule: {
        cron: "0 7 * * 1"
    },
    entities: ['User']
});

export default app;
