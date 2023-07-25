import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSubnavbarComponent } from './registration-subnavbar.component';

describe('RegistrationSubnavbarComponent', () => {
  let component: RegistrationSubnavbarComponent;
  let fixture: ComponentFixture<RegistrationSubnavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationSubnavbarComponent]
    });
    fixture = TestBed.createComponent(RegistrationSubnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
