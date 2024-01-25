class UserAuth {
    constructor(sdkIntegration) {
        this.url = 'https://api.trakto.io';
        this.sdkIntegration = sdkIntegration;
        this.userAccessToken = window.localStorage.getItem('access_token');        
    }

    initComponents() {
        document.addEventListener('DOMContentLoaded', () => {
            this.loginButton = document.getElementById('loginButton');
            this.logoutButton = document.getElementById('logoutButton');
            this.authModal = document.getElementById('authModal');
            this.submitAuth = document.getElementById('submitAuth');
    
            this.email = document.getElementById('email');
            this.password = document.getElementById('password');
    
            this.loginButton.addEventListener('click', this.showModal.bind(this));
            this.logoutButton.addEventListener('click', this.logout.bind(this));
            this.submitAuth.addEventListener('click', this.authenticate.bind(this));
    
            this.setAuthButtonStates();
        });
    }

    setAuthButtonStates() {
        this.loginButton.hidden = !!this.userAccessToken;
        this.logoutButton.hidden = !this.userAccessToken;
    }

    showModal() {
        $('#authModal').modal('show');
    }

    logout() {
        window.localStorage.removeItem('access_token');
        window.location.reload();
    }

    startAuthFlow() {
        const token = window.localStorage.getItem('access_token');
        if (TraktoEditor && token) {
            sdkIntegration.loadTraktoScript(token);
            return;
        }
        if (!this.userAccessToken || token === null) {
            $('#authModal').modal('show');
        }
    
        if (!TraktoEditor) {
            alert('Trakto Editor SDK não foi importado. Verifique o arquivo index.html se possui a tag script com o link para o arquivo trakto-editor-sdk.js');
            sdkIntegration.notifyErrorToImportSdk();
        }
    }

    authenticate() {
        const email = this.email.value;
        const password = this.password.value;

        if (!email || !password) return alert('Preencha todos os campos');

        fetch(`${this.url}/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({
                email,
                password,
            }),
        }).then(async (response) => {
            const { access_token } = await response.json();
            if (!access_token) return;
            window.localStorage.setItem('access_token', access_token);
            this.userAccessToken = access_token;
            this.setAuthButtonStates();
            $('#authModal').modal('hide');
            this.sdkIntegration.loadTraktoScript(access_token);
        }).catch((error) => {
            alert('Erro ao autenticar');
        });
    }
}