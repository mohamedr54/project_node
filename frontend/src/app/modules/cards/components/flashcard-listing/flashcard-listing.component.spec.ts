import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardListingComponent } from './flashcard-listing.component';

describe('FlashcardListingComponent', () => {
  let component: FlashcardListingComponent;
  let fixture: ComponentFixture<FlashcardListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashcardListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
