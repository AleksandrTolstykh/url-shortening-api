import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Input() mobile = false;
  showMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.showMenu = !this.showMenu;
  }
}
