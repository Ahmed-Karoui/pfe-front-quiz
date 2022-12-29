import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicaltestComponent } from './technicaltest.component';

describe('TechnicaltestComponent', () => {
  let component: TechnicaltestComponent;
  let fixture: ComponentFixture<TechnicaltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicaltestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicaltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
