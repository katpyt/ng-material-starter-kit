import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { InfluencerModel } from '../../models/influencer.model';
import { InfluencerService } from '../../services/influencer.service';

@Component({
  selector: 'app-influencer-nested-list',
  styleUrls: ['./influencer-nested-list.component.scss'],
  templateUrl: './influencer-nested-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InfluencerNestedListComponent {
  readonly list$: Observable<InfluencerModel[]> = this._influencerService.getAll();

  constructor(private _influencerService: InfluencerService) {
  }
}
