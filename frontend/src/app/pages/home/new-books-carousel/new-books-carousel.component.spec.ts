import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBooksCarouselComponent } from './new-books-carousel.component';

describe('NewBooksCarouselComponent', () => {
  let component: NewBooksCarouselComponent;
  let fixture: ComponentFixture<NewBooksCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBooksCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBooksCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
