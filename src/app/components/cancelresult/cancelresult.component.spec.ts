import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelresultComponent } from './cancelresult.component';

describe('CancelresultComponent', () => {
  let component: CancelresultComponent;
  let fixture: ComponentFixture<CancelresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
