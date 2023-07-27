import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkinListsComponent } from './walkin-lists.component';

describe('WalkinListsComponent', () => {
  let component: WalkinListsComponent;
  let fixture: ComponentFixture<WalkinListsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WalkinListsComponent]
    });
    fixture = TestBed.createComponent(WalkinListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
