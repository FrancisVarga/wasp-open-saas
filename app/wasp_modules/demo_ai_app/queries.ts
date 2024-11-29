import { App } from 'wasp-config';

export const configureDemoAiAppQueries = (app: App) => {
    app.query('getGptResponses', {
        fn: { import: 'getGptResponses', from: '@src/demo-ai-app/operations' },
        entities: ['User', 'GptResponse']
    });

    app.query('getAllTasksByUser', {
        fn: { import: 'getAllTasksByUser', from: '@src/demo-ai-app/operations' },
        entities: ['Task']
    });
}
