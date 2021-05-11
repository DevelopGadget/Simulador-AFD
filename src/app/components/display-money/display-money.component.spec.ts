import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayMoneyComponent } from './display-money.component';

describe('DisplayMoneyComponent', () => {
  let component: DisplayMoneyComponent;
  let fixture: ComponentFixture<DisplayMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
