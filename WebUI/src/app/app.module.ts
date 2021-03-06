import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutMeModule } from './modules/about-me/about-me.module';
import { BlogModule } from './modules/blog/blog.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutMeModule,
    BlogModule,
    BrowserAnimationsModule,
    RouterModule,
    // MarkdownModule.forRoot()
    MarkdownModule.forRoot({
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true
        }
      }
    })
  ],
  providers: [MarkdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
