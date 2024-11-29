import { createApp } from './wasp_modules/appConfig';

// Auth
import { configureAuth } from './wasp_modules/auth/config';
import { configureAuthRoutes } from './wasp_modules/auth/routes';

// User
import { configureUserActions } from './wasp_modules/user/actions';
import { configureUserQueries } from './wasp_modules/user/queries';

// Demo AI App
import { configureDemoAiAppRoutes } from './wasp_modules/demo_ai_app/routes';
import { configureDemoAiAppActions } from './wasp_modules/demo_ai_app/actions';
import { configureDemoAiAppQueries } from './wasp_modules/demo_ai_app/queries';

// Payment
import { configurePaymentRoutes } from './wasp_modules/payment/routes';
import { configurePaymentActions } from './wasp_modules/payment/actions';
import { configurePaymentQueries } from './wasp_modules/payment/queries';

// File Upload
import { configureFileUploadRoutes } from './wasp_modules/file_upload/routes';
import { configureFileUploadActions } from './wasp_modules/file_upload/actions';
import { configureFileUploadQueries } from './wasp_modules/file_upload/queries';

// Analytics
import { configureAnalyticsQueries } from './wasp_modules/analytics/queries';
import { configureAnalyticsJobs } from './wasp_modules/analytics/jobs';

// Admin
import { configureAdminRoutes } from './wasp_modules/admin/routes';

// Messages & Newsletter
import { configureMessagesNewsletterRoutes } from './wasp_modules/messages_newsletter/routes';
import { configureMessagesNewsletterJobs } from './wasp_modules/messages_newsletter/jobs';

// Base Routes
import { configureBaseRoutes } from './wasp_modules/base/routes';

const app = createApp();

// Configure Auth
configureAuth(app);
configureAuthRoutes(app);

// Configure User
configureUserActions(app);
configureUserQueries(app);

// Configure Demo AI App
configureDemoAiAppRoutes(app);
configureDemoAiAppActions(app);
configureDemoAiAppQueries(app);

// Configure Payment
configurePaymentRoutes(app);
configurePaymentActions(app);
configurePaymentQueries(app);

// Configure File Upload
configureFileUploadRoutes(app);
configureFileUploadActions(app);
configureFileUploadQueries(app);

// Configure Analytics
configureAnalyticsQueries(app);
configureAnalyticsJobs(app);

// Configure Admin
configureAdminRoutes(app);

// Configure Messages & Newsletter
configureMessagesNewsletterRoutes(app);
configureMessagesNewsletterJobs(app);

// Configure Base Routes
configureBaseRoutes(app);

export default app;
