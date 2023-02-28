// Every class represent a page in the web application

class Register {

    gotoHomepage() {
        cy.visit("https://www.konga.com/");
    }
    getSignupLoginButton() {
        return cy.get('._12e27_1r3kc > ._7ad32_SD12Y');
    }

    getOnSignUpText() {
        return cy.get('._1dce2_MjLDv > a');
    }

    getFirstName() {
        return cy.get('#firstname');
    }

    getLastName() {
        return cy.get('#lastname');
    }

    getEmail() {
        return cy.get('#email');
    }

    getPhoneNumber() {
        return cy.get('#phone');
    }

    getPassword() {
        return cy.get(':nth-child(6) > #password');
    }

    getCreateAccountButton() {
        return cy.get('.d563b_2w5FH > ._2aac2_3bwnD > ._0a08a_3czMG');
    }

    //setters
    clickOnSignUpText() {
        this.getOnSignUpText().click();
    }
    
    setFirstName(firstname){
        this.getFirstName().type(firstname)
    }

    setLastName(lastname){
        this.getLastName().type(lastname)
    }

    setPhoneNumber(phone){
        this.getPhoneNumber().type(phone)
    }

    setEmail(email) {
        this.getEmail().type(email);
    }

    setPassword(password) {
        this.getPassword().type(password);
    }

    clickOnCreateAccountButton() {
        this.getCreateAccountButton().click();
    }

    gotoLoginpage() {
        this.getSignupLoginButton().click();
    }
}

export default Register;