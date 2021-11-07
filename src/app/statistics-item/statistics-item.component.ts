import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-statistics-item',
  templateUrl: './statistics-item.component.html',
  styleUrls: ['./statistics-item.component.scss']
})
export class StatisticsItemComponent implements OnInit {
  @Input() image = "";
  @Input() header = "";
  @Input() text = "";

  constructor() { }

  ngOnInit(): void {
  }

}
