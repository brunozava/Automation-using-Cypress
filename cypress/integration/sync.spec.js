/// <reference types="cypress" />

describe('Esperas', () => {

    before(() => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')

    })
    beforeEach(() => {
        cy.reload()
    })

    it('Deve aguardar elemento estar disponivel', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
        cy.get('#novoCampo').type('Funciona')

    })

    it('Deve fazer retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
        .should('exist')
        .type('Funciona')
    })

    it('Uso do find', () => {
        cy.get('#buttonList').click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        cy.get('#lista li span')
            //.find('span')
            .should('contain', 'Item 2')
    })

    
    it('Uso do timeout', () => {
        //cy.get('#buttonDelay').click()
        //cy.get('#novoCampo').should('exist')
        //cy.get('#buttonList').click()
        //cy.wait(5000)
        //cy.get('#lista li span', { timeout: 30000 })
        //  .should('contain', 'Item 2')
        cy.get('#buttonList').click()
        cy.get('#lista li span', { timeout: 30000 })
          .should('have.length', 2)
    })

    it('Click Retry', () => {
        cy.get('#buttonCount')
          .click()
          .should('have.value', '1')
        
    })

    it.only('Should vs Then', () => {
        cy.get('#buttonList').then($el => {
        //cy.get('#lista li span').then($el => {
            //console.log($el)
            expect($el).to.have.length(1)
            cy.get('#buttonList')
        })
          //.should('have.length', 2)
    })

    
})

