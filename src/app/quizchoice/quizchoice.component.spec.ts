import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizchoiceComponent } from './quizchoice.component';

describe('QuizchoiceComponent', () => {
  let component: QuizchoiceComponent;
  let fixture: ComponentFixture<QuizchoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizchoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizchoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
