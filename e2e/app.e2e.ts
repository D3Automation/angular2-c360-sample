import { Angular2C360SamplePage } from './app.po';

describe('angular2-c360-sample App', function() {
  let page: Angular2C360SamplePage;

  beforeEach(() => {
    page = new Angular2C360SamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-c360-sample works!');
  });
});
