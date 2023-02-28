// Every class represent a page in the web application

class Login {

    gotoHomepage() {
        cy.visit("https://www.konga.com/");
    }

    // getters
    getSignupLoginButton() {
        return cy.get('._12e27_1r3kc > ._7ad32_SD12Y');
    }

    getEmail() {
        return cy.get("#username");
    }

    getPassword() {
        return cy.get("#password");
    }

    getLoginButton() {
        return cy.get('button[type="submit"]').contains("Login");
    }

    //setters
    setEmail(email) {
        this.getEmail().type(email);
    }

    setPassword(password) {
        this.getPassword().type(password);
    }

    clickOnLoginButton() {
        this.getLoginButton().click();
    }

    gotoLoginpage() {
        this.getSignupLoginButton().click();
    }
}

export default Login;