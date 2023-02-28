// <reference types="cypress" />

import LoginPage from "../../pages/login";

describe("Automate Konga web app", function () {

    // create an instance (copy) of login class
    const loginPage = new LoginPage();

    it("Test for valid login ", function () {
        //calling all the necessary functions/methods inside login page class
        
        // go to konga home page or landing page
        loginPage.gotoHomepage();

        // click on login/signup button on the home/landing page
        loginPage.gotoLoginpage();

        
        loginPage.setEmail("");

        loginPage.setPassword("");

        loginPage.clickOnLoginButton();
    })
})