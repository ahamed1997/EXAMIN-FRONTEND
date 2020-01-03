import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultpageComponent} from './resultpage.component'


describe('ResultpageComponent', () => {
  type NewType = ResultpageComponent;

  let component: NewType;
  let fixture: ComponentFixture<ResultpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
