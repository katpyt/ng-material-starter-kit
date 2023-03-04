import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-crypto-table',
  styleUrls: ['./crypto-table.component.scss'],
  templateUrl: './crypto-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoTableComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptoService.getAll()
  .pipe(
    //map(() => [])
  );

  constructor(private _cryptoService: CryptoService) {
  }
}
