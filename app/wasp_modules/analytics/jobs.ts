import { App } from 'wasp-config';

export const configureAnalyticsJobs = (app: App) => {
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
}
