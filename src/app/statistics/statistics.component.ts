import { Component, OnInit } from '@angular/core';

class StatisticsItem {
  image = "";
  header = "";
  text = "";

  constructor(image: string, header: string, text: string) {
    this.image = image;
    this.header = header;
    this.text = text;
  }
}

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  items: StatisticsItem[] = [
    new StatisticsItem(
      "assets/icon-brand-recognition.svg",
      "Brand Recognition",
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."),
    new StatisticsItem(
      "assets/icon-detailed-records.svg",
      "Detailed Records",
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."),
    new StatisticsItem(
      "assets/icon-fully-customizable.svg",
      "Fully Customizable",
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
