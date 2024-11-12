describe('Cypress Playground Tests', () => {
  it('Visit Banner Cyporess Cloud Course', () => {
    cy.visit('https://cypress-playground.s3.eu-central-1.amazonaws.com/index.html')
    cy.get('#promotional-banner').contains('📣 Get to know the')
    cy.get('a[target="_blank"]').contains('Cypress, from Zero to the Cloud')
  })
})