/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage"

describe("Login test", () => {
    beforeEach("Visit Login page", () => {
        cy.visit("/login")
        cy.url().should("include", "/login");

        loginPage.loginPageHeading
        .should("be.visible")
        .and("have.text", "Log in with your existing account")
        .and("have.css", "color", "rgb(62, 139, 117)");
    });

    it("Login with a valid Data", () => {
        cy.intercept({
            method: "POST",
            url: `${Cypress.env("apiUrl")}/v2/login`,
        }).as("validLogin");

       
      
        loginPage.loginWithValidData("vezbatest123@gmail.com", "12345vezba");
        
        cy.wait("@validLogin").then((interception) => {
        console.log(interception);
        expect(interception.response.statusCode).not.to.be.equal(401);
        expect(interception.response.statusCode).to.be.equal(200);
        expect(interception.response.body.token).to.exist;
        
          });

        cy.url().should("not.include", "/login");
      
         
      
          
    });
});

