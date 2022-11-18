import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/entity-models/entities/brand';

@Pipe({
  name: 'brandsFilter',
})
export class BrandsPipe implements PipeTransform {
  transform(brands: Brand[], filterText: string): Brand[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : filterText;
    return filterText
      ? brands.filter(
          (b: Brand) =>
            b.brandName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : brands;
  }
}
