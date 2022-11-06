import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from 'src/app/services/color/color.service';

@Component({
  selector: 'app-del-color',
  templateUrl: './del-color.component.html',
  styleUrls: ['./del-color.component.css'],
})
export class DelColorComponent implements OnInit {
  colorDeleteForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createColorDeleteForm();
  }

  createColorDeleteForm(){
    this.colorDeleteForm = this.formBuilder.group({
      colorId: ['', Validators.required]
    })
  }

  delete(){
    if (this.colorDeleteForm.valid) {
      let colorModel = Object.assign({},this.colorDeleteForm.value)
      this.colorService.delete(colorModel)
    }else{
      this.toastrService.error('Form Has Absent Values', 'Be Carefull')
    }
  }
}
