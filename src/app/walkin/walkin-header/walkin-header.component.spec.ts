import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinHeaderComponent } from './walkin-header.component';

describe('WalkinHeaderComponent', () => {
  let component: WalkinHeaderComponent;
  let fixture: ComponentFixture<WalkinHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalkinHeaderComponent]
    });
    fixture = TestBed.createComponent(WalkinHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
