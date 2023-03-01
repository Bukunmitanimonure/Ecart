/// <reference types="cypress" />

import LoginPage from "../../pages/login";

describe("Automate Konga web app", function () {

    // declare login variable
    let loginData;

    // get access to data using hook (before)
    before(function() {
        // get access to login data
        cy.fixture("login").then(function(loginDataResponse) {
            loginData = loginDataResponse;
        })
    })

    // create an instance (copy) of login class
    const loginPage = new LoginPage();

    it("Test for valid login ", function () {
        //calling all the necessary functions/methods inside login page class
        
        // go to konga home page or landing page
        loginPage.gotoHomepage();

        // click on login/signup button on the home/landing page
        loginPage.gotoLoginpage();

        
        loginPage.setEmail(loginData.email);

        loginPage.setPassword(loginData.password);

        loginPage.clickOnLoginButton();
    })
})