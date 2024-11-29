import { App } from 'wasp-config';

export const configureUserActions = (app: App) => {
    app.action('updateCurrentUser', {
        fn: { import: 'updateCurrentUser', from: '@src/user/operations' },
        entities: ['User']
    });

    app.action('updateUserById', {
        fn: { import: 'updateUserById', from: '@src/user/operations' },
        entities: ['User']
    });
}
