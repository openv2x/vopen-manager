import { VopenManagerPage } from './app.po';

describe('vopen-manager App', () => {
  let page: VopenManagerPage;

  beforeEach(() => {
    page = new VopenManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
