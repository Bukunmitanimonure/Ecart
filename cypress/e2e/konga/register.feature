Feature: Valid Registration

    Scenario: Sign up with existing user credentials
        Given a user is on Konga landing page
        When a user click on login or signup button
        When a user enter firstname, lastname, existing email, phone number and password 
        When a user clicks on register button 
        Then error phone number already exist should be displayed to users
        



        

    