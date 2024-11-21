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

  it('Types in the signature fields, check the checkbox to see the preview the asserts in the sign',()=>{
    cy.get('#signature-textarea-with-checkbox').type('Leandro A. Medeiros Sign New')
    cy.get('#signature-checkbox').check()
    cy.get('#signature-triggered-by-check').should('have.text','Leandro A. Medeiros Sign New')
    cy.contains('#signature-triggered-by-check','Leandro A. Medeiros Sign New').should('be.visible')
    cy.get('#signature-checkbox').uncheck()
    cy.contains('#signature-triggered-by-check','Leandro A. Medeiros Sign New').should('not.exist')
  })
  it('Check both possible Radios and asserts if it is "on"  or "off" ',()=>{
    cy.get('#on-off').should('have.text','ON')
    cy.contains('#off').should('not.exist')
    cy.get('#off').check()
    cy.get('#on-off').should('have.text','OFF')
    cy.get('#on-off').should('have.text','OFF')
    cy.get('#on-off').should('be.visible','OFF').should('be.visible')
    cy.contains('#on').should('not.exist')
    cy.get('#on').check()
    cy.contains('#off').should('not.exist')
    cy.get('input[type="radio"][value="on"]').check()
    cy.get('#on-off').should('have.text','ON')
    cy.get('#on-off').should('be.visible','ON ').should('be.visible')
  })

  it('Test Select All Options ',()=>{
    /*My Resoluton*/
    cy.contains('p',"You haven't selected a type yet.").should('be.visible')
    cy.get('#selection-type').select('Basic')
    cy.get('#select-selection').should('have.text',"You've selected: BASIC")
    cy.get('#selection-type').select('Standard')
    cy.get('#select-selection').should('have.text',"You've selected: STANDARD")
    cy.get('#selection-type').select('VIP')
    cy.get('#select-selection').should('have.text',"You've selected: VIP")

    cy.get('#selection-type').select('VIP')
    cy.contains('#select-selection','VIP').should('be.visible')
    cy.get('#selection-type').select('Basic')
    cy.contains('#select-selection','BASIC').should('be.visible')
    cy.get('#selection-type').select('Standard')
    cy.contains('#select-selection','STANDARD').should('be.visible')
  })
})
