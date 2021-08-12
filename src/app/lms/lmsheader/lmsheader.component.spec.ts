import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LmsheaderComponent } from './lmsheader.component';

describe('LmsheaderComponent', () => {
  let component: LmsheaderComponent;
  let fixture: ComponentFixture<LmsheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LmsheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LmsheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
