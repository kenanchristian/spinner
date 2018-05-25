import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SpinnerComponent} from './spinner.component';
import {SpinnerService} from './spinner.service';
import {SpinnerSettings} from './spinner-settings.interface';

class SpinnerMockService {

  _spinnerState: SpinnerSettings = {};

  get spinnerState(): SpinnerSettings {
    return this._spinnerState;
  }

  set spinnerState(value: SpinnerSettings) {
    this._spinnerState = value;
  }

}

describe('SpinnerComponent', () => {
  let component: SpinnerComponent;
  let fixture: ComponentFixture<SpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        {provide: SpinnerService, useClass: SpinnerMockService}
      ],
      declarations: [SpinnerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
