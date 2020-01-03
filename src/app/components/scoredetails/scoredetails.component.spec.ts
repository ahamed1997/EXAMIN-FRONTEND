import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoredetailsComponent } from './scoredetails.component';

describe('ScoredetailsComponent', () => {
  let component: ScoredetailsComponent;
  let fixture: ComponentFixture<ScoredetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoredetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoredetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
