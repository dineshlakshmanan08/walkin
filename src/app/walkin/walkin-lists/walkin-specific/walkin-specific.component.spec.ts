import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinSpecificComponent } from './walkin-specific.component';

describe('WalkinSpecificComponent', () => {
  let component: WalkinSpecificComponent;
  let fixture: ComponentFixture<WalkinSpecificComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalkinSpecificComponent]
    });
    fixture = TestBed.createComponent(WalkinSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
