import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CryptoCurrencyModel } from '../../models/crypto-currency.model';
import { CryptoCurrencyService } from '../../services/crypto-currency.service';

@Component({
  selector: 'app-subject-model-in-memory-crypto',
  styleUrls: ['./subject-model-in-memory-crypto.component.scss'],
  templateUrl: './subject-model-in-memory-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class SubjectModelInMemoryCryptoComponent {
  private _cryptoListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public cryptoList$: Observable<CryptoCurrencyModel[]> = this._cryptoListSubject.asObservable().pipe(switchMap(() => this._cryptoCurrencyService.getAll()));
  private _cryptoPriceChangeInfoSubject: ReplaySubject<string> = new ReplaySubject<string>();
  public cryptoPriceChangeInfo$: Observable<string> = this._cryptoPriceChangeInfoSubject.asObservable();

  constructor(private _cryptoCurrencyService: CryptoCurrencyService) {
  }

  onShowPriceChangeButtonClicked(priceChange: string) {
    this._cryptoPriceChangeInfoSubject.next(priceChange);
  }
}
