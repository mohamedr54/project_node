import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardSummaryComponent } from './flashcard-summary.component';

describe('FlashcardSummaryComponent', () => {
  let component: FlashcardSummaryComponent;
  let fixture: ComponentFixture<FlashcardSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlashcardSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FlashcardSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
