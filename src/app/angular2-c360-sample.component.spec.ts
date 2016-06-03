import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2C360SampleAppComponent } from '../app/angular2-c360-sample.component';

beforeEachProviders(() => [Angular2C360SampleAppComponent]);

describe('App: Angular2C360Sample', () => {
  it('should create the app',
      inject([Angular2C360SampleAppComponent], (app: Angular2C360SampleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular2-c360-sample works!\'',
      inject([Angular2C360SampleAppComponent], (app: Angular2C360SampleAppComponent) => {
    expect(app.title).toEqual('angular2-c360-sample works!');
  }));
});
