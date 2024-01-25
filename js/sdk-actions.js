class SDKActions {
    constructor(sdkInstance) {
        this.sdkInstance = sdkInstance;
        this.initComponents();
    }

    start() {
        this.options = {
            backgroundImage: 'https://unsplash.it/1000/500?image=0',
            width: 1000,
            height: 500,
            exportResolution: ['low'],
        };
        this.templateId = null;
        this.designId = null;
        this.formatId = null;
    }

    initComponents() {
        document.getElementById('createWithBlankModel').addEventListener('click', this.createWithBlankModel.bind(this));
        document.getElementById('createUsingTemplate').addEventListener('click', this.createUsingTemplate.bind(this));
        document.getElementById('createUsingImage').addEventListener('click', this.createUsingImage.bind(this));
        document.getElementById('createUsingDesign').addEventListener('click', this.createUsingDesign.bind(this));
        document.getElementById('createFromFormat').addEventListener('click', this.createFromFormat.bind(this));
    }

    createWithBlankModel() {
        console.log('TRAKTO SDK: Create with blank model');
        const payload = this.options;
        delete payload.backgroundImage;
        this.sdkInstance.openBlank(this.setResponse.bind(this), payload);
    }

    createUsingTemplate() {
        if (!templateId) {
            alert('Não há um template carregado ainda');
            return;
        }
        this.sdkInstance.openFromTemplate(templateId, this.setResponse.bind(this));
    }

    createUsingTemplate() {
        if (!templateId) {
            alert('Não há um template carregado ainda');
            return;
        }
        this.sdkInstance.openFromTemplate(templateId, this.setResponse.bind(this));
    }

    createUsingImage() {
        this.sdkInstance.openBlank(this.setResponse.bind(this), this.options);
    }

    createUsingDesign() {
        if (!designId) {
            alert('Não há um design carregado ainda');
            return;
        }
        this.sdkInstance.openDocument(designId, this.setResponse.bind(this));
    }

    createFromFormat() {
        if (!formatId) {
            alert('Não há um formato carregado ainda');
            return;
        }
        this.sdkInstance.openFromFormat(formatId, this.setResponse.bind(this));
    }

    setResponse(response) {
        document.getElementById('textAreaEditorResponse').value = JSON.stringify(response, null, 2);
        alert("Veja a aba 'Respostas do editor' para acessar retorno completo");
    }
}