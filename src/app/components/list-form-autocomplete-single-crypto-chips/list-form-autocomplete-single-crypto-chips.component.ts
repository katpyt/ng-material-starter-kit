import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { combineLatest, map, Observable, shareReplay, startWith } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-list-form-autocomplete-single-crypto-chips',
  styleUrls: ['./list-form-autocomplete-single-crypto-chips.component.scss'],
  templateUrl: './list-form-autocomplete-single-crypto-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListFormAutocompleteSingleCryptoChipsComponent {

  readonly cryptoControl: FormControl = new FormControl('');
  selectedCrypto: FormArray = new FormArray<FormControl>([]);

  readonly cryptoFormValues$ = this.cryptoControl.valueChanges.pipe(startWith(''));

  readonly cryptoAll$: Observable<CryptoModel[]> = this._cryptoService.getAll().pipe(shareReplay(1));

  readonly cryptoList$: Observable<CryptoModel[]> = combineLatest([
    this.cryptoAll$,
    this.cryptoFormValues$
  ]).pipe(
    map(([list, cryptoValue]) => {
      if (!cryptoValue) return list;

      return list.filter((crypto) => {
        // console.log("crypto.symbol [" + crypto.symbol + "], cryptoValue.toUpperCase() [" + cryptoValue.toUpperCase() + "], crypto.symbol.toUpperCase().indexOf(cryptoValue.toUpperCase()) [" + crypto.symbol.toUpperCase().indexOf(cryptoValue.toUpperCase()) + "]")
        // crypto.symbol.toUpperCase().indexOf(cryptoValue?.toUpperCase()) >= 0
        return crypto.symbol.toUpperCase().includes(cryptoValue?.toUpperCase())
        //TO_VER: nie działa filtrowanie listy przy wpisywaniu liter !!! ??? !!! -> RETURN!!!
      })
    })
  )

  onSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedCrypto.push(
      new FormControl(
        event.option.value
      )
    );
  }

  constructor(private _cryptoService: CryptoService) {
  }
}
