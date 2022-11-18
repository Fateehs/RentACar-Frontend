import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { ToastrService } from 'ngx-toastr';
import { CarId } from 'src/app/models/constants/entity-ids';
import { ADDCARIMAGE_URL } from 'src/app/models/constants/urls';
import { ResponseModel } from 'src/app/models/response-models/responseModel';
import { CarImageService } from 'src/app/services/carimage.service';

@Component({
  selector: 'app-add-car-image',
  templateUrl: './add-car-image.component.html',
  styleUrls: ['./add-car-image.component.css'],
})
export class AddCarImageComponent implements OnInit {
  uploader: FileUploader;
  currentCarId: number;
  hasBaseDropZoneOver: boolean;
  response: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.currentCarId = params[CarId];
      this.initializeUploader(this.currentCarId);
    });
  }

  initializeUploader(carId: number) {
    this.uploader = new FileUploader({
      url: ADDCARIMAGE_URL + carId,
      removeAfterUpload: true,
      allowedFileType: ['image'],
    });

    this.onBefore();

    this.onError();

    this.onSuccess();

    this.hasBaseDropZoneOver = false;

    this.response = '';

    this.uploader.response.subscribe((res) => (this.response = res));
  }

  onBefore() {
    this.uploader.onBeforeUploadItem = (item) => {
      item.withCredentials = false;
    };
  }

  onSuccess() {
    this.uploader.onSuccessItem = (item, response, status, headers) => {
      if (response) {
        let newResponse: ResponseModel = JSON.parse(response);
        this.toastrService.success(newResponse.message);
        window.location.reload();
      }
    };
  }

  onError() {
    this.uploader.onErrorItem = (item, response) => {
      if (response) {
        let newResponse: any = JSON.parse(response);
        let message = newResponse.message ?? newResponse.Message;
        this.toastrService.error(message);
      }
    };
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
