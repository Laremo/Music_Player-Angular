import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { CardPlayerComponent } from './components/card-player/card-player.component';
import { GenericSectionComponent } from './components/generic-section/generic-section.component';

@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    MediaPlayerComponent,
    CardPlayerComponent,
    GenericSectionComponent,
  ],
  imports: [CommonModule],
  exports: [
    SidebarComponent,
    MediaPlayerComponent,
    HeaderComponent,
    CardPlayerComponent,
    GenericSectionComponent,
  ],
})
export class SharedModule {}
