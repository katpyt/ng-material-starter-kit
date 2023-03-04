import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { NameModel } from '../../models/name.model';
import { NameService } from '../../services/name.service';

@Component({
  selector: 'app-names-list',
  styleUrls: ['./names-list.component.scss'],
  templateUrl: './names-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NamesListComponent {
  readonly names$: Observable<NameModel[]> = this._nameService.getAll();

  constructor(private _nameService: NameService) {
  }
}
