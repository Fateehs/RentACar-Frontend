import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-upd-color',
  templateUrl: './upd-color.component.html',
  styleUrls: ['./upd-color.component.css'],
})
export class UpdColorComponent implements OnInit {
  colorUpdateForm: FormGroup;
  constructor(
    private colorService: ColorService,
    private toastrService: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createColorUpdateForm();
  }

  createColorUpdateForm() {
    this.colorUpdateForm = this.formBuilder.group({
      colorId: ['', Validators.required],
      colorName: ['', Validators.required],
    });
  }

  update() {
    if (this.colorUpdateForm.valid) {
      let colorModel = Object.assign({}, this.colorUpdateForm.value);
      this.colorService.update(colorModel);
    } else {
      this.toastrService.error('Form Has Absent Values', 'Be Carefull');
    }
  }
}
