import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPackageFormComponent } from './learning-package-form.component';

describe('LearningPackageFormComponent', () => {
  let component: LearningPackageFormComponent;
  let fixture: ComponentFixture<LearningPackageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningPackageFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LearningPackageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
