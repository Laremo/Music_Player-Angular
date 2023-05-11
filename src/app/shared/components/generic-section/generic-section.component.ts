import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css'],
})
export class GenericSectionComponent {
  @Input() title: string = ''; //title comes from the tracks component
  @Input() mode: 'small' | 'big' = 'big'; //just those two vallues are accepted
  @Input() dataTracks: Array<TrackModel> = [];
}
