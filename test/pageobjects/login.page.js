import { $ } from '@wdio/globals'
import Page from './page.js';


class LoginPage extends Page {
    
    get username() {
        return $('#user-name');
    }

    get password () {
        return $('#password');
    }

    get button () {
        return $('#login-button');
    }

    
    async login (username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.button.click();
    }

    
    open () {
        return super.open('');
    }
}

export default new LoginPage();
