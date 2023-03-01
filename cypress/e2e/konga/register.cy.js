/// <reference types="cypress" />

import RegisterPage from "../../pages/register";
// import RegisterData from "../../fixtures/register.json"
let registerData

Before(function(){
  cy.fixture("register").then(function(registerDataResponse){
    registerData = registerDataResponse;
  })
})

describe("Automate Konga web app", function () {

  
    const registerPage = new RegisterPage();

    it("Test for valid SignUp ", function () {
        
        // go to konga home page or landing page
        registerPage.gotoHomepage();

        // click on login/signup button on the home/landing page
        registerPage.gotoLoginpage();

        registerPage.clickOnSignUpText();

        registerPage.setFirstName(registerData.FirstName);

        registerPage.setLastName(registerData.LastName);

        registerPage.setPhoneNumber(registerData.PhoneNumber);

        registerPage.setEmail(registerData.Email);

        registerPage.setPassword(registerData.Password);

        registerPage.clickOnCreateAccountButton();
    })
})