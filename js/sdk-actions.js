class SDKActions {
    constructor(sdkInstance, formatId, designId, templateId) {
        this.sdkInstance = sdkInstance;
        this.formatId = formatId;
        this.designId = designId;
        this.templateId = templateId;
        this.initComponents();
    }

    start() {
        this.options = {
            backgroundImage: 'https://unsplash.it/1000/500?image=0',
            width: 1000,
            height: 500,
            exportResolution: ['low'],
        };
    }

    initComponents() {
        document.getElementById('createWithBlankModel').addEventListener('click', this.createWithBlankModel.bind(this));
        document.getElementById('createUsingTemplate').addEventListener('click', this.createUsingTemplate.bind(this));
        document.getElementById('createUsingImage').addEventListener('click', this.createUsingImage.bind(this));
        document.getElementById('createUsingDesign').addEventListener('click', this.createUsingDesign.bind(this));
        document.getElementById('createFromFormat').addEventListener('click', this.createFromFormat.bind(this));

        this.applyTraktoButtonConfig();
    }

    applyTraktoButtonConfig() {
        const openDesignButton = document.getElementById('openDesignButton');
        openDesignButton.setAttribute('data-documentid', this.designId);

        const templateButton = document.getElementById('openTemplateButton');
        templateButton.setAttribute('data-templateid', this.templateId);

        const formatButton = document.getElementById('openBlankButton');
        formatButton.setAttribute('data-formatid', this.formatId);
    }
    createWithBlankModel() {
        const payload = this.options;
        delete payload.backgroundImage;
        this.sdkInstance.openBlank(this.setResponse.bind(this), payload);
    }

    createUsingTemplate() {
        if (!this.templateId) {
            alert('Não há um template carregado ainda');
            return;
        }
        this.sdkInstance.openFromTemplate(this.templateId, this.setResponse.bind(this));
    }

    createUsingImage() {
        this.sdkInstance.openBlank(this.setResponse.bind(this), this.options);
    }

    createUsingDesign() {
        if (!this.designId) {
            alert('Não há um design carregado ainda');
            return;
        }
        this.sdkInstance.openDocument(this.designId, this.setResponse.bind(this));
    }

    createFromFormat() {
        if (!this.formatId) {
            alert('Não há um formato carregado ainda');
            return;
        }
        this.sdkInstance.openFromFormat(this.formatId, this.setResponse.bind(this));
    }

    setResponse(response) {
        document.getElementById('textAreaEditorResponse').value = JSON.stringify(response, null, 2);
        alert("Veja a aba 'Respostas do editor' para acessar retorno completo");
    }
}