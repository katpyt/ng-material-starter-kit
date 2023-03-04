import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NameModel } from '../../models/name.model';
import { NameService } from '../../services/name.service';

@Component({
  selector: 'app-names-table',
  styleUrls: ['./names-table.component.scss'],
  templateUrl: './names-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesTableComponent {
  readonly list$: Observable<NameModel[]> = this._nameService.getAll();

  constructor(private _nameService: NameService) {
  }
}
