import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { HeaderComponent } from './header/header.component';
import { ShortenComponent } from './shorten/shorten.component';
import { ShortenLinkComponent } from './shorten-link/shorten-link.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { StatisticsItemComponent } from './statistics-item/statistics-item.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    MobileMenuComponent,
    HeaderComponent,
    ShortenComponent,
    ShortenLinkComponent,
    StatisticsComponent,
    StatisticsItemComponent,
    CallToActionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
