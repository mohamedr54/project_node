import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LearningPackageService} from "../../service/learning-package-service";

@Component({
  selector: 'app-learning-package-form',
  templateUrl: './learning-package-form.component.html',
  styleUrl: './learning-package-form.component.scss'
})
export class LearningPackageFormComponent implements OnInit {
  packageForm: FormGroup<any>

  constructor(
    public fb: FormBuilder,
    private modalService: NgbModal,
    private service: LearningPackageService
  ) {
    this.packageForm = this.fb.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
      difficulty: [null, Validators.required],
      category: [null, Validators.required]
    })
  }

  ngOnInit() {

  }

  submitForm(form: FormGroup<any>) {
    const packageValue = form.value;
    if (form.valid) {
      this.service.add(packageValue)
        .subscribe(() => {
          this.modalService.dismissAll();
        })
    }
    window.location.reload();
  }

  closeForm() {
    this.modalService.dismissAll();
  }
}
