import { YlAngularPage } from './app.po';

describe('yl-angular App', () => {
  let page: YlAngularPage;

  beforeEach(() => {
    page = new YlAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
