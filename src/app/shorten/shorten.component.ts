import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

class Link {
  fullLink: string;
  shortenedLink: string;
  copied: boolean;

  constructor(fullLink: string, shortenedLink: string, copied: boolean) {
    this.fullLink = fullLink;
    this.shortenedLink = shortenedLink;
    this.copied = copied;
  }
}

@Component({
  selector: 'app-shorten',
  templateUrl: './shorten.component.html',
  styleUrls: ['./shorten.component.scss']
})
export class ShortenComponent implements OnInit {
  @Input() mobile = false;
  link = "";
  error = false;
  links: Link[] = [];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const parts = cookies[i].split("=");
      this.links.push(new Link(parts[0], parts[1], false));
    }
  }

  onClick(link: string) {
    if (link === "") {
      this.error = true;
    } else {
      this.http.get("https://api.shrtco.de/v2//shorten?url=" + link, {})
      .subscribe(
        (data: any) => {
          this.error = false;
          this.links.push(new Link(link, data.result.full_short_link, false));
          const date = new Date();
          date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
          document.cookie = link + "=" + data.result.full_short_link + ";expires=" + date.toUTCString() + ";path=/";
        },
        (error: any) => {
          this.error = true;
        }
      );
    }
    this.link = "";
  }

  onCopy(event: any) {
    let newLinks: Link[] = [];
    for (let link of this.links) {
      if (link.shortenedLink !== event) {
        link.copied = false;
      } else {
        link.copied = true;
      }
      newLinks.push(link);
    }
    this.links = newLinks;
  }
}
