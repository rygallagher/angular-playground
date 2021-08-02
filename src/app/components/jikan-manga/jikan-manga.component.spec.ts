import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JikanMangaComponent } from './jikan-manga.component';

describe('JikanMangaComponent', () => {
  let component: JikanMangaComponent;
  let fixture: ComponentFixture<JikanMangaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JikanMangaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JikanMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
