import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleProgressComponent } from './sample-progress.component';

describe('SampleProgressComponent', () => {
  let component: SampleProgressComponent;
  let fixture: ComponentFixture<SampleProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
