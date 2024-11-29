import { App } from 'wasp-config';

export const configureAnalyticsQueries = (app: App) => {
    app.query('getDailyStats', {
        fn: { import: 'getDailyStats', from: '@src/analytics/operations' },
        entities: ['User', 'DailyStats']
    });
}
