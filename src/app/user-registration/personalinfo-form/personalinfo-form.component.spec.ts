import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalinfoFormComponent } from './personalinfo-form.component';

describe('PersonalinfoFormComponent', () => {
  let component: PersonalinfoFormComponent;
  let fixture: ComponentFixture<PersonalinfoFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersonalinfoFormComponent]
    });
    fixture = TestBed.createComponent(PersonalinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
