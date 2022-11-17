import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AreYouSureYouWantToDeleteThisPicture } from 'src/app/models/constants/questions';
import { BASE_URL } from 'src/app/models/constants/urls';
import { CarImage } from 'src/app/models/entitymodels/car/carImage';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CarImageService } from 'src/app/services/car-image/carimage.service';
import { TemplatesService } from 'src/app/services/template/templates.service';
import { AdminChildComponentBaseComponent } from '../../../bases/admin-child-component-base/admin-child-component-base.component';

@Component({
  selector: 'app-delete-car-image',
  templateUrl: './delete-car-image.component.html',
  styleUrls: ['./delete-car-image.component.css'],
})
export class DeleteCarImageComponent
  extends AdminChildComponentBaseComponent
  implements OnInit
{
  @Input() currentCarImagesFromParent: CarImage[];
  constructor(
    private carImageService: CarImageService,
    public override authService: AuthService,
    private toastrService: ToastrService,
    private templatesService: TemplatesService
  ) {
    super(authService);
    this.innerHTML = 'Delete';
  }
  ngOnInit(): void {}

  delete(id: number) {
    if (confirm(AreYouSureYouWantToDeleteThisPicture)) {
      this.carImageService.delete(id).subscribe(
        (response) => {
          this.toastrService.success(response.message);
          this.deleteFromArray(id);
        },
        (errorResponse) => this.templatesService.errorResponse(errorResponse)
      );
    }
  }

  deleteFromArray(id: number) {
    let index = this.currentCarImagesFromParent.findIndex((x) => x.id == id);
    this.currentCarImagesFromParent.splice(index, 1);
  }

  getFullImagePath(imagePath: string) {
    return BASE_URL + imagePath;
  }

  reloadPage() {
    window.location.reload();
  }

  get getCurrentCarId() {
    return this.currentCarImagesFromParent.length > 0
      ? this.currentCarImagesFromParent[0].carId
      : '';
  }
}
