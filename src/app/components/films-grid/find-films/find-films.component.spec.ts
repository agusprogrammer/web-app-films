import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFilmsComponent } from './find-films.component';

describe('FindFilmsComponent', () => {
  let component: FindFilmsComponent;
  let fixture: ComponentFixture<FindFilmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFilmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
