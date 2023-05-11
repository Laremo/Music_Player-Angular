import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover:
      'https://laverdadnoticias.com/__export/1588104600975/sites/laverdad/img/2020/04/28/meme_mickey_y_pluto_muerto.jpg_2145692119.jpg',
    name: 'nombre',
    album: 'plutooo',
    url: 'kaljkfasd',
    _id: 1,
  };
  state = 'playong';
}
