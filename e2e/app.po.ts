export class Angular2C360SamplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-c360-sample-app h1')).getText();
  }
}
