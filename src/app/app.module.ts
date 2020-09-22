import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsListComponent } from './components/news-list/news-list.component';
import { NewsListItemComponent } from './components/news-list-item/news-list-item.component';
import { WrapperComponent } from './components/wrapper/wrapper.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NewsListComponent, NewsListItemComponent, WrapperComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
