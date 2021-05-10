import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabsButtonsComponent } from './fabs-buttons.component';

describe('FabsButtonsComponent', () => {
  let component: FabsButtonsComponent;
  let fixture: ComponentFixture<FabsButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabsButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabsButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
