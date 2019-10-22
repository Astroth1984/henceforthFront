import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningComponent } from './cleaning.component';

describe('CleaningComponent', () => {
  let component: CleaningComponent;
  let fixture: ComponentFixture<CleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
