Feature: Valid Login

    Scenario: Login with valid credentials
        Given a user is on Konga landing page
        When a user click on login or signup button
        When a user enter email address and password 
        When a user click on login button 
        Then a user should be redirected to his authenticated home page
        



        

    