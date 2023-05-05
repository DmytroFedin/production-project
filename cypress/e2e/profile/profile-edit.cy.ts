let profileId = '';
describe('User opens profile page', () => {
  beforeEach(() => {
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`/profile/${data.id}`);
    });
  });

  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('and profile showed', () => {
    cy.getByTestId('ProfileCard.Firstname').should('have.value', 'test');
  });
  it('and edit it', () => {
    const newFirstname = 'new';
    const newLastname = 'lastname';

    cy.updateProfile(newFirstname, newLastname);
    cy.getByTestId('ProfileCard.Firstname').should('have.value', newFirstname);
    cy.getByTestId('ProfileCard.Lastname').should('have.value', newLastname);
  });
});
