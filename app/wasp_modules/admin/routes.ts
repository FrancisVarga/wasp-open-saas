import { App } from 'wasp-config';

export const configureAdminRoutes = (app: App) => {
    const analyticsDashboardPage = app.page('AnalyticsDashboardPage', {
        component: { importDefault: 'AnalyticsDashboardPage', from: '@src/admin/dashboards/analytics/AnalyticsDashboardPage' },
        authRequired: true
    });
    app.route('AdminRoute', { path: '/admin', to: analyticsDashboardPage });

    const adminUsersPage = app.page('AdminUsersPage', {
        component: { importDefault: 'AdminUsers', from: '@src/admin/dashboards/users/UsersDashboardPage' },
        authRequired: true
    });
    app.route('AdminUsersRoute', { path: '/admin/users', to: adminUsersPage });

    const adminSettingsPage = app.page('AdminSettingsPage', {
        component: { importDefault: 'AdminSettings', from: '@src/admin/elements/settings/SettingsPage' },
        authRequired: true
    });
    app.route('AdminSettingsRoute', { path: '/admin/settings', to: adminSettingsPage });

    const adminChartsPage = app.page('AdminChartsPage', {
        component: { importDefault: 'AdminCharts', from: '@src/admin/elements/charts/ChartsPage' },
        authRequired: true
    });
    app.route('AdminChartsRoute', { path: '/admin/chart', to: adminChartsPage });

    const adminFormElementsPage = app.page('AdminFormElementsPage', {
        component: { importDefault: 'AdminForms', from: '@src/admin/elements/forms/FormElementsPage' },
        authRequired: true
    });
    app.route('AdminFormElementsRoute', { path: '/admin/forms/form-elements', to: adminFormElementsPage });

    const adminFormLayoutsPage = app.page('AdminFormLayoutsPage', {
        component: { importDefault: 'AdminForms', from: '@src/admin/elements/forms/FormLayoutsPage' },
        authRequired: true
    });
    app.route('AdminFormLayoutsRoute', { path: '/admin/forms/form-layouts', to: adminFormLayoutsPage });

    const adminCalendarPage = app.page('AdminCalendarPage', {
        component: { importDefault: 'AdminCalendar', from: '@src/admin/elements/calendar/CalendarPage' },
        authRequired: true
    });
    app.route('AdminCalendarRoute', { path: '/admin/calendar', to: adminCalendarPage });

    const adminUIAlertsPage = app.page('AdminUIAlertsPage', {
        component: { importDefault: 'AdminUI', from: '@src/admin/elements/ui-elements/AlertsPage' },
        authRequired: true
    });
    app.route('AdminUIAlertsRoute', { path: '/admin/ui/alerts', to: adminUIAlertsPage });

    const adminUIButtonsPage = app.page('AdminUIButtonsPage', {
        component: { importDefault: 'AdminUI', from: '@src/admin/elements/ui-elements/ButtonsPage' },
        authRequired: true
    });
    app.route('AdminUIButtonsRoute', { path: '/admin/ui/buttons', to: adminUIButtonsPage });
}
