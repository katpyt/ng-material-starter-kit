import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable, combineLatest, of, map } from 'rxjs';
import { CryptoCurrencyModel } from 'src/app/models/crypto-currency.model';
import { CryptoCurrencyService } from 'src/app/services/crypto-currency.service';

@Component({
  selector: 'app-subject-sorting-field-crypto',
  styleUrls: ['./subject-sorting-field-crypto.component.scss'],
  templateUrl: './subject-sorting-field-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SubjectSortingFieldCryptoComponent {

  readonly orderForm = new FormControl(); //{disabled: true});
  readonly sortDirectionValues$: Observable<string[]> = of(['asc', 'desc']);
  readonly sortItemValues$: Observable<string[]> = of(['lastPrice', 'openPrice', 'priceChange']);

  private _selectedSortDirectionSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedSortDirection$: Observable<string> = this._selectedSortDirectionSubject.asObservable();

  private _selectedItemOrderValueSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public selectedItemOrderValue$: Observable<string> = this._selectedItemOrderValueSubject.asObservable();

  readonly cryptoList$: Observable<CryptoCurrencyModel[]> = combineLatest([
    this._cryptoService.getAll(),
    this.selectedSortDirection$,
    this.selectedItemOrderValue$,
  ]).pipe(
    map(
      ([list, selectedSortDirection, selectedItemOrderValue]) => {

        if (selectedSortDirection.length === 0) return list;

        return list.sort((a: Record<string, any>, b: Record<string, any>) => {
          if (selectedSortDirection === 'asc') {
            return parseFloat(a[selectedItemOrderValue]) > parseFloat(b[selectedItemOrderValue]) ? 1 : -1
          }
          return parseFloat(a[selectedItemOrderValue]) > parseFloat(b[selectedItemOrderValue]) ? -1 : 1
        });
      }));

  constructor(private _cryptoService: CryptoCurrencyService) {
    this.orderForm.disable();
  }

  onDirectionSortingChange(sortDirection: string): void {
    this._selectedSortDirectionSubject.next(sortDirection);
  }

  onItemSortingChange(sortItem: string): void {
    console.log("sortItem [" + sortItem + "]");

    if (sortItem !== '') this.orderForm.enable();
    this._selectedItemOrderValueSubject.next(sortItem);
  }

}
