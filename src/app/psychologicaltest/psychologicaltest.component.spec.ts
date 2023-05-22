import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychologicaltestComponent } from './psychologicaltest.component';

describe('PsychologicaltestComponent', () => {
  let component: PsychologicaltestComponent;
  let fixture: ComponentFixture<PsychologicaltestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsychologicaltestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychologicaltestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
