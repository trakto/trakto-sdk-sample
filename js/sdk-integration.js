class SDKIntegration {
    constructor(notificationComponent) {
        this.userAccessToken = window.localStorage.getItem('access_token');
        this.notificationComponent = notificationComponent;
        this.sdkInstance = null;
        this.formatId = null;
        this.designId = null;
        this.templateId = null;
        this.initComponents();
    }

    initComponents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.formatsComponent = document.getElementById('textAreaFormats');
            this.designsComponent = document.getElementById('textAreaDesigns');
            this.templatesComponent = document.getElementById('textAreaTemplates');
            this.logsComponent = document.getElementById('textAreaLogs');
        });
    }
    
    loadTraktoScript(accessToken) {
        TraktoEditor.init({
            accessToken,
            fullScreen: false,
            customLoaderColor: '#9900f2',
            customLoaderBgColor: '#ff9999',
            buttonClassName: 'trakto-button',
            allowNewPages: false,
            defaultCallback: this.editorResponseCallback.bind(this),
            onAuthenticated: this.authenticationCallback.bind(this),
            onClose: this.onCloseCallback.bind(this),
            listTemplatesCallback: this.templateCallback.bind(this),
            listDocumentsCallback: this.documentCallback.bind(this),
            defaultErrorHandler: this.errorHandlerCallback.bind(this),
            listFormatsCallback: this.listFormatsCallback.bind(this),
        });
    }
    
    listFormatsCallback(data) {
        this.formatsComponent.value = JSON.stringify(data, null, 2);
        if (data.length) {
            this.formatId = data[0].id;
        }
    }
    
    documentCallback(data) {
        this.designsComponent.value = JSON.stringify(data, null, 2);
        if (data.length) {
            this.designId = data[data.length-1].id;
        }
    }
    
    templateCallback(data) {
        this.templatesComponent.value = JSON.stringify(data, null, 2);
        if  (data.length) {
            this.templateId = data[0].id;
        }
    }
    
    onCloseCallback() {
        console.log('Gatilho disparado ao fechar o editor');
    
    }
    
    editorResponseCallback(response) {
        if (!response) {
            alert('Editor não retornou resposta');
        }
    }
    
    authenticationCallback(sdkInstance) {
        if (sdkInstance) {
            const actions = new SDKActions(
                sdkInstance,
                this.formatId,
                this.designId,
                this.templateId,);
            actions.start();
            this.notificationComponent.notifySuccess('✅ SDK pronto para ser utilizado! 🚀');
        } else {
            this.notificationComponent.notifyError('😢 Não foi possível importar o SDK');
        }
    }
    
    errorHandlerCallback(error) {
        console.log(error)
        alert(`Ocorreu um erro ao realizar uma ação com o SDK. Verifique a aba de erros.`);
        const currentValue = this.logsComponent.value;
        this.logsComponent.value = currentValue + '\n' + error.toString();
    }
}