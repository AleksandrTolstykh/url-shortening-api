import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'url-shortening-api';
  mobile = false;

  ngOnInit(): void {
    this.mobile = (window.innerWidth <= 768) ? true : false;
  }

  onResize(event: any) {
    this.mobile = (event.target.innerWidth <= 768) ? true : false;
  }
}
