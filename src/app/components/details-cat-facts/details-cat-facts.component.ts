import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CatFactModel } from '../../models/cat-fact.model';
import { CatFactService } from '../../services/cat-fact.service';

@Component({
  selector: 'app-details-cat-facts',
  styleUrls: ['./details-cat-facts.component.scss'],
  templateUrl: './details-cat-facts.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsCatFactsComponent {
  readonly catFact$: Observable<CatFactModel> = this._catFactService.getFact();

  constructor(private _catFactService: CatFactService) {
  }
}
