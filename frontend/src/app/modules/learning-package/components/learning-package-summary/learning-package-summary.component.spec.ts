import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPackageSummaryComponent } from './learning-package-summary.component';

describe('LearningPackageSummaryComponent', () => {
  let component: LearningPackageSummaryComponent;
  let fixture: ComponentFixture<LearningPackageSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningPackageSummaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningPackageSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
