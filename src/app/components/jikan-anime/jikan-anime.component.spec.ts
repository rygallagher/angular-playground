import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JikanAnimeComponent } from './jikan-anime.component';

describe('JikanAnimeComponent', () => {
  let component: JikanAnimeComponent;
  let fixture: ComponentFixture<JikanAnimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JikanAnimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JikanAnimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
