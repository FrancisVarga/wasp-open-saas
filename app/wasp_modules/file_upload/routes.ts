import { App } from 'wasp-config';

export const configureFileUploadRoutes = (app: App) => {
    const fileUploadPage = app.page('FileUploadPage', {
        component: { importDefault: 'FileUpload', from: '@src/file-upload/FileUploadPage' },
        authRequired: true
    });
    app.route('FileUploadRoute', { path: '/file-upload', to: fileUploadPage });
}
