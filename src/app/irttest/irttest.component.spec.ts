import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IrttestComponent } from './irttest.component';

describe('IrttestComponent', () => {
  let component: IrttestComponent;
  let fixture: ComponentFixture<IrttestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IrttestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IrttestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
