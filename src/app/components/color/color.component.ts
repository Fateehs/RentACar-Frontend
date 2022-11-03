import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entitymodels/color';
import { ColorService } from 'src/app/services/colorservice/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css'],
})
export class ColorComponent implements OnInit {
  currentColor: Color;
  colors: Color[] = [];

  constructor(private colorService: ColorService) {}

  ngOnInit(): void {
    this.getColors();
  }

  getColors() {
    this.colorService.getAll().subscribe((response) => {
      this.colors = response.data;
    });
  }
  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  getAllColorClass() {
    if (!this.currentColor) {
      return 'list-group-item active';
    } else {
      return 'list-group-item';
    }
  }
  setCurrentColor(color: Color) {
    this.currentColor = color;
  }
}
