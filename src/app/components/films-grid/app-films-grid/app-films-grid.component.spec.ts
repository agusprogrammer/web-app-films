import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilmsGridComponent } from './app-films-grid.component';

describe('AppFilmsGridComponent', () => {
  let component: AppFilmsGridComponent;
  let fixture: ComponentFixture<AppFilmsGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFilmsGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFilmsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
