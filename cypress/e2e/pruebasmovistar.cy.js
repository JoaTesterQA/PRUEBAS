describe ("Prueba Movistar", function (){
    beforeEach(() => {
        // runs before each test in the block
        cy.visit("https://tiendaonline.movistar.com.ar/")
        cy.wait(12000) 
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
     })
    
    
    
    it.only('Validar-sector-destacados-MenoraMayor', function(){
        cy.get('.toolbar-sorter').click()
        cy.get('#low_to_high').click()
    })

    it('Validar-seccion-marca-samsung', function(){
        cy.get('.block-subtitle').click()
        cy.get('[data-value="49"]').click()
    })

    it('Validacion-seleccionar-producto', function(){
        cy.get('.nav-toggle').click()
        cy.get('.btn-wrapper > .secondary').click()
        cy.get('#product-item-info_14500').click()
        cy.visit("https://tienda.movistar.com.ar/negocios-samsung-galaxy-a14-4g.html")
    })

    it('Validar-compra-producto',function(){
        cy.get('').click() 
        cy.visit("https://tiendaonline.movistar.com.ar/motorola-moto-g13-128gb-4g.html")
        cy.wait(12000)
        cy.get('#swatch_attribute_card').click()
        cy.visit('https://tiendaonline.movistar.com.ar/checkout/cart/')
        cy.get('.item > .action').click()
        cy.visit('https://tiendaonline.movistar.com.ar/checkout/?gafn=terminales&gafl=individuos_magento&gasn=shipping&gast=1#shipping')
        cy.get('#MO6V99Q').type('alanjoa18@hotmail.com')
        cy.wait(12000) 
        cy.get('#PV6CJGU').type('Alan')
        cy.get('#EQRC4HM').type('Moreira')
        cy.get('#DE4DIXB').type('46991839')
        cy.get('#A6CJFTU').select('1')
        cy.get('#movistar-checkout-birthdate-day').select('18')
        cy.get('#movistar-checkout-birthdate-month').select('10')
        cy.get('#movistar-checkout-birthdate-year').select('77')
        cy.wait(12000) 
    })

          
    





})