// <reference types="cypress" />

import RegisterPage from "../../pages/register";

describe("Automate Konga web app", function () {

  
    const registerPage = new RegisterPage();

    it("Test for valid SignUp ", function () {
        
        // go to konga home page or landing page
        registerPage.gotoHomepage();

        // click on login/signup button on the home/landing page
        registerPage.gotoLoginpage();

        registerPage.clickOnSignUpText();

        registerPage.setFirstName("");

        registerPage.setLastName("");

        registerPage.setPhoneNumber("");

        registerPage.setEmail("");

        registerPage.setPassword("");

        registerPage.clickOnCreateAccountButton();
    })
})