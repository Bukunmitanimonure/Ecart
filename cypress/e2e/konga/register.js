import RegisterPage from "../../pages/register";
import registerData from "../../fixtures/register.json";
const { Given, When, Then, After } = require("@badeball/cypress-cucumber-preprocessor");

// create an instance (copy) of login class
const registerPage = new RegisterPage();

Given("a user is on Konga landing page", () => {
    // go to konga home page or landing page
    registerPage.gotoHomepage();
});

When("a user click on login or signup button", () => {
    // click on login/signup button on the home/landing page
    registerPage.gotoLoginpage();
    registerPage.clickOnSignUpText();
});

When("a user enter firstname, lastname, existing email, phone number and password", () => {
    registerPage.setFirstName(registerData.FirstName);
    registerPage.setLastName(registerData.LastName);
    registerPage.setPhoneNumber(registerData.PhoneNumber);
    registerPage.setEmail(registerData.Email);
    registerPage.setPassword(registerData.Password);

});

When("a user clicks on register button", () => {
    registerPage.clickOnCreateAccountButton();
});

Then("error phone number already exist should be displayed to users", () => {
    //We are suppose to place an assertion
});

