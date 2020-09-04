import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoComponent } from './video/video.component';
import { VideoFooterComponent } from './video/video-footer/video-footer.component';
import { VideoSidebarComponent } from './video/video-sidebar/video-sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoComponent,
    VideoFooterComponent,
    VideoSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
