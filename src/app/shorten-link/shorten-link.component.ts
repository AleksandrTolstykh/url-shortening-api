import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-shorten-link',
  templateUrl: './shorten-link.component.html',
  styleUrls: ['./shorten-link.component.scss']
})
export class ShortenLinkComponent implements OnInit {
  @Input() fullLink = "";
  @Input() shortenedLink = "";
  @Input() copied = false;
  @Output() copyEvent = new EventEmitter<string>();

  constructor(private clipboard: Clipboard) {}

  ngOnInit(): void {
  }

  onClick(event: any) {
    this.clipboard.copy(this.shortenedLink);
    this.copyEvent.emit(this.shortenedLink);
  }
}
