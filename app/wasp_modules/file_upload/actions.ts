import { App } from 'wasp-config';

export const configureFileUploadActions = (app: App) => {
    app.action('createFile', {
        fn: { import: 'createFile', from: '@src/file-upload/operations' },
        entities: ['User', 'File']
    });
}
