const notification = new NotificationComponent()
const sdkIntegration = new SDKIntegration(notification);
const auth = new UserAuth(sdkIntegration);

document.addEventListener('DOMContentLoaded', () => {
    auth.startAuthFlow();
});