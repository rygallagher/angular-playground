import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalettePickerComponent } from './palette-picker.component';

describe('PalettePickerComponent', () => {
  let component: PalettePickerComponent;
  let fixture: ComponentFixture<PalettePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalettePickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalettePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
