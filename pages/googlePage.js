class GooglePage {
  visit() {
    cy.visit('/')
  }

  getSearchInput() {
    return cy.get('input[name="q"]')
  }

  getSearchButton() {
    // Google’s “Google Search” button can be tricky because of different selectors
    return cy.get('input[name="btnK"]').first()
  }

  search(term) {
    this.getSearchInput().type(term)
    // Usually Google updates suggestions, so we force pressing Enter
    this.getSearchInput().type('{enter}')
  }
}

export default GooglePage
