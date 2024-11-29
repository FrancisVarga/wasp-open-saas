import { App } from 'wasp-config';

export const configureMessagesNewsletterJobs = (app: App) => {
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
}
