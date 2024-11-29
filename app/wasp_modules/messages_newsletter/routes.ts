import { App } from 'wasp-config';

export const configureMessagesNewsletterRoutes = (app: App) => {
    const adminMessagesPage = app.page('AdminMessagesPage', {
        component: { importDefault: 'AdminMessages', from: '@src/messages/MessagesPage' },
        authRequired: true
    });
    app.route('AdminMessagesRoute', { path: '/admin/messages', to: adminMessagesPage });
}
