import { Pipe, PipeTransform } from '@angular/core';
import { CarDetailDTO } from '../models/entity-models/dto/car-detail-dto';


@Pipe({
  name: 'carDetailsFilter',
})
export class CarDetailsFilterPipe implements PipeTransform {
  transform(value: CarDetailDTO[], filterText: string): CarDetailDTO[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : '';
    return filterText
      ? value.filter(
          (cd: CarDetailDTO) =>
            cd.carName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : value;
  }
}
