import { App } from 'wasp-config';

export const configureDemoAiAppActions = (app: App) => {
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
}
