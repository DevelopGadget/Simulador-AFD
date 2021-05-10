import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsMoneyComponent } from './buttons-money.component';

describe('ButtonsMoneyComponent', () => {
  let component: ButtonsMoneyComponent;
  let fixture: ComponentFixture<ButtonsMoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsMoneyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
