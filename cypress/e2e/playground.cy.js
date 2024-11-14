describe('Cypress Playground Tests', () => {

  beforeEach(()=>{
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('Shows a Banner Cypress Cloud Course', () => {
    cy.get('#promotional-banner').should('be.visible')
    cy.contains('Cypress, from Zero to the Cloud').should('be.visible').click()
  })
  it('Click the Subscribe and shows a message', () => {
    cy.contains('button','Subscribe').should('be.visible').click()
    cy.contains('#success',"You've been successfully subscribed to our newsletter.").should('be.visible')
  })
  it('Types i an input wich "Signs"a form then asserts it is signed',()=>{
    cy.get('#signature-textarea').type('Leandro A. Medeiros')
    cy.get('#signature').should('have.text','Leandro A. Medeiros')
    cy.contains('#signature','Leandro A. Medeiros').should('be.visible')
  })
})
