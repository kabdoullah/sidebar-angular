import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetAmountsComponent } from './preset-amounts.component';

describe('PresetAmountsComponent', () => {
  let component: PresetAmountsComponent;
  let fixture: ComponentFixture<PresetAmountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresetAmountsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresetAmountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
