import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPackageListingComponent } from './learning-package-listing.component';

describe('LearningPackageListingComponent', () => {
  let component: LearningPackageListingComponent;
  let fixture: ComponentFixture<LearningPackageListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningPackageListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningPackageListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
