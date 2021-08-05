describe("avoid_error", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false
    })
  
    it("green path test", () => {      
      cy.visit('http://automationpractice.com/index.php')
      cy.title().should("eq", "My Store")
      cy.get('.login').click()
      cy.title().should("eq", "Login - My Store")  
      const uuid1 = () => Cypress._.random(0, 1e3)
      const id = uuid1()
      const testmail = `przykładowymail${id}@test.pl`
      cy.get('#email_create').type(testmail).should("have.value", testmail).blur()
      cy.get('.form-ok').should('be.visible')
      cy.get('#SubmitCreate').click()
      cy.get('#id_gender1', { timeout: 60000 }).should('be.visible').check()
      cy.get('#customer_firstname').clear().type('Przykladoweimie')
      cy.get('#customer_lastname').clear().type('Przykladowenazwisko')
      cy.get('#passwd').type('przykladowehaslo')
      cy.get('#days').select('2')
      cy.get('#months').select('6')
      cy.get('#years').select('1990')
      cy.get('#address1').clear().type("Tomickiego 22/19")
      cy.get('#city').type('Kraków')
      cy.get('#id_state').select('5')
      cy.get('#postcode').type('31982')
      cy.get('#phone_mobile').type('698395996')
      cy.get('#alias').clear().type('przykladowyadres')
      cy.get('#submitAccount').click()
      cy.get('.icon-user').click()
      cy.get('#email').should('have.value', testmail)
      cy.get('.logout').click()
      cy.get('#email_create').should('be.visible')
    })
  })