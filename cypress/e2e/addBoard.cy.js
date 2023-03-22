/// <reference types="Cypress" />

import { loginPage} from '../page_objects/loginPage';
import { addBoardPage } from '../page_objects/addBoard';

describe('adding board', ()=>{

let boardsTitle = "Kraj"

before('login', ()=>{
    cy.visit('/login')
    loginPage.loginWithValidData("vezbatest123@gmail.com", "12345vezba"
        
)
    cy.url().should('not.include', '/login')
})
    it('add board', ()=>{
    cy.intercept({
        method: 'POST',
        url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
    }).as('addBoard')

    cy.visit('/')
    addBoardPage.addingBoard(boardsTitle)
    cy.wait('@addBoard').then(interseption=>{
        expect(interseption.response.statusCode).to.exist
        expect(interseption.response.statusCode).eq(201)
})
    cy.url().should('include', '/boards')
    addBoardPage.backlogBar.should('be.visible')
    .and('have.css', 'color', 'rgb(255, 255, 255)')
    addBoardPage.backlogTitle.should('be.visible')
    .and('have.text', 'Backlog')
    

})

})