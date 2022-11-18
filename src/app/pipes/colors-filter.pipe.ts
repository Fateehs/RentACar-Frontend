import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/entity-models/entities/color';

@Pipe({
  name: 'colorsFilter',
})
export class ColorsPipe implements PipeTransform {
  transform(colors: Color[], filterText: string): Color[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : filterText;
    return filterText
      ? colors.filter(
          (c: Color) =>
            c.colorName.toLocaleLowerCase().indexOf(filterText) !== -1
        )
      : colors;
  }
}
