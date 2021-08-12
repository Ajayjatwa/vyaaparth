import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VyaaparComponent } from './vyaapar.component';

describe('VyaaparComponent', () => {
  let component: VyaaparComponent;
  let fixture: ComponentFixture<VyaaparComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VyaaparComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VyaaparComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
