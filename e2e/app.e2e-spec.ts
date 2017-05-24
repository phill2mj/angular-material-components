import { AngularMaterialComponentsPage } from './app.po';

describe('angular-material-components App', () => {
  let page: AngularMaterialComponentsPage;

  beforeEach(() => {
    page = new AngularMaterialComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
