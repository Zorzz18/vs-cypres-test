class AddBoard{
    get getOrganization(){
        return cy.get('.vs-c-my-organization__content').eq(0)
    }
    get addBoard(){
        return cy.get('.vs-c-list').eq(0)
    }
    get addBoardBtn(){
        return cy.get('.vs-c-media__object')
    }
    get boardTitle(){
        return cy.get('input[name="name"]')
    }
    get nextButton(){
        return cy.get('button[name="next_btn"]')
    }
    get chooseScrum(){
        return cy.get('.vs-c-radio-check').eq(0)
    }
    get boardsModal() {
        return cy.get(".vs-c-modal__body");
      }
    get okBtn() {
        return this.boardsModal.find("button").last();
      }
    get backlogBar(){
        return cy.get('.vs-c-col__head-info')
    }
    get backlogTitle(){
        return cy.get('.vs-c-col__title-backlog')
    }
    get boardLength(){
        return cy.get('.vs-c-task-card__body')
    }

    addingBoard(boardTitle){
        this.getOrganization.click()
        this.okBtn.click()
        this.addBoard.click()
        this.addBoardBtn.click()
        this.boardTitle.type(boardTitle)
        this.nextButton.click()
        this.chooseScrum.click()
        this.nextButton.click()
        this.nextButton.click()
        this.nextButton.click()
        this.nextButton.click()
    }
}
export const addBoardPage = new AddBoard()