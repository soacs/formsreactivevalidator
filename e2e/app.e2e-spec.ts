import { FormsreactivevalidatorPage } from './app.po';

describe('formsreactivevalidator App', () => {
  let page: FormsreactivevalidatorPage;

  beforeEach(() => {
    page = new FormsreactivevalidatorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
