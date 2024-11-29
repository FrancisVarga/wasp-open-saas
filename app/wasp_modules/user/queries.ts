import { App } from 'wasp-config';

export const configureUserQueries = (app: App) => {
    app.query('getPaginatedUsers', {
        fn: { import: 'getPaginatedUsers', from: '@src/user/operations' },
        entities: ['User']
    });
}
