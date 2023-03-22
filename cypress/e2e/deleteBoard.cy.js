/// <reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";
import { deleteBoard } from "../page_objects/deleteBoard";

describe("Delete Board test", () => {
    before("Log into the App", () => {
    cy.visit("/login")
    loginPage.loginWithValidData(Cypress.env("testUserEmail"), Cypress.env("testUserPassword"));
    cy.wait(5000);
    cy.url().should("not.include", "/login")
    });
   
    
    it('delete',()=>{
        cy.intercept({
            method: 'DELETE',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards/*'
        }).as("delete")

        deleteBoard.delete();

        cy.wait("@delete").then((interception) => {
        expect(interception.response.statusCode).eq(200);
        expect(interception.response.statusMessage).eq("OK");
        })
    });
})
