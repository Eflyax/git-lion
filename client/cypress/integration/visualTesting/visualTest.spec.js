describe('visual test', () => {

    it('should test snapshot', () => {
        cy.visit('http://localhost:3000/graph/log1')
        cy.wait(1000)
        cy.document().toMatchImageSnapshot();
    });

    it('should test snapshot of second page', () => {
        cy.visit('http://localhost:3000/graph/log2')
        cy.wait(5000)
        cy.document().toMatchImageSnapshot();
    });

    it('should test snapshot of third page', () => {
        cy.visit('http://localhost:3000/graph/log3')
        cy.wait(5000)
        cy.document().toMatchImageSnapshot();
    });

    it('should test snapshot of fourth page', () => {
        cy.visit('http://localhost:3000/graph/log4')
        cy.wait(5000)
        cy.document().toMatchImageSnapshot();
    });
})