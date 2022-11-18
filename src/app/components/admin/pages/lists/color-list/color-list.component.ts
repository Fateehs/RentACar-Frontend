import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entity-models/entities/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css'],
})
export class ColorListComponent implements OnInit {
  filterText: string;
  colors: Color[];
  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
    });
  }
}
