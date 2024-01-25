class NotificationComponent {

    getComponents() {
        return {
            loaderTextComponent: document.getElementById('sdkLoading'),
            loaderContainerComponent: document.getElementById('loaderContainer'),
        };
    }

    notifySuccess(message) {
        const { loaderTextComponent, loaderContainerComponent } = this.getComponents();
        setTimeout(() => {
            loaderTextComponent.textContent = message
            loaderContainerComponent.style.backgroundColor = 'rgba(12, 112, 3, 0.8)';
            loaderTextComponent.style.color = 'white';
        }, 200);
    }

    notifyError(message) {
        const { loaderTextComponent, loaderContainerComponent } = this.getComponents();
        setTimeout(() => {
            loaderTextComponent.textContent = message;
            loaderContainerComponent.style.backgroundColor = 'rgba(241, 0, 0, 0.8)';
            loaderTextComponent.style.color = 'white';
        }, 200);
    }
}