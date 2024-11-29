import { App } from 'wasp-config';

export const configureFileUploadQueries = (app: App) => {
    app.query('getAllFilesByUser', {
        fn: { import: 'getAllFilesByUser', from: '@src/file-upload/operations' },
        entities: ['User', 'File']
    });

    app.query('getDownloadFileSignedURL', {
        fn: { import: 'getDownloadFileSignedURL', from: '@src/file-upload/operations' },
        entities: ['User', 'File']
    });
}
