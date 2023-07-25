import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationProgressbarComponent } from './registration-progressbar.component';

describe('RegistrationProgressbarComponent', () => {
  let component: RegistrationProgressbarComponent;
  let fixture: ComponentFixture<RegistrationProgressbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationProgressbarComponent]
    });
    fixture = TestBed.createComponent(RegistrationProgressbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
