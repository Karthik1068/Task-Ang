import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldTransactionComponent } from './old-transaction.component';

describe('OldTransactionComponent', () => {
  let component: OldTransactionComponent;
  let fixture: ComponentFixture<OldTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldTransactionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
