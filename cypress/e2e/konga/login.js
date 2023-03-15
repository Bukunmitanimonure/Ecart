import LoginPage from "../../pages/login";
import loginData from "../../fixtures/login.json";
const { Given, When, Then, After } = require("@badeball/cypress-cucumber-preprocessor");

// create an instance (copy) of login class
const loginPage = new LoginPage();

Given("a user is on Konga landing page", () => {
    // go to konga home page or landing page
    loginPage.gotoHomepage();
});

When("a user click on login or signup button", () => {
    // click on login/signup button on the home/landing page
    loginPage.gotoLoginpage();
});

When("a user enter email address and password", () => {
    loginPage.setEmail(loginData.email);
    loginPage.setPassword(loginData.password);
});

When("a user click on login button", () => {
    loginPage.clickOnLoginButton();
});

Then("a user should be redirected to his authenticated home page", () => {
    //We are suppose to place an assertion
});