import { Component } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent {
  mockTrackList: Array<TrackModel> = [];

  ngOnInit() {
    const { data } = (dataRaw as any).default;
    this.mockTrackList = data;
    
  }
}
