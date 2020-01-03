import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionrenderComponent } from './questionrender.component';

describe('QuestionrenderComponent', () => {
  let component: QuestionrenderComponent;
  let fixture: ComponentFixture<QuestionrenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionrenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionrenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
