import { AngularTestsPage } from './app.po';

describe('angular-tests App', () => {
  let page: AngularTestsPage;

  beforeEach(() => {
    page = new AngularTestsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
