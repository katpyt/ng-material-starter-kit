import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { CityModel, CountryModel, OrderProductModel } from '../../models/order.model';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-form-group-nested-order',
  styleUrls: ['./form-group-nested-order.component.scss'],
  templateUrl: './form-group-nested-order.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormGroupNestedOrderComponent {
  readonly orderForm: FormGroup = new FormGroup({
    product: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required]),
    shipping: new FormGroup({
      shippingStreet: new FormControl('', [Validators.required]),
      shippingHouseNumber: new FormControl('', [Validators.required]),
      shippingZipCode: new FormControl('', [Validators.required]),
      shippingCity: new FormControl('', [Validators.required]),
      shippingDeliveryTime: new FormControl('', [Validators.required]),
    }),

    invoice: new FormGroup({
      invoiceAddressLine: new FormControl('', [Validators.required]),
      invoiceExtraAddressLine: new FormControl('', [Validators.required]),
      invoiceVatNumber: new FormControl('', [Validators.required]),
      invoiceCountry: new FormControl('', [Validators.required])
    })
  });

  readonly productList$: Observable<OrderProductModel[]> = this._orderService.getAllProducts();
  readonly cityList$: Observable<CityModel[]> = this._orderService.getAllCities();
  readonly countryList$: Observable<CountryModel[]> = this._orderService.getAllCountries();
  readonly quantityList$ = of(["1", "2", "3", "4", "5"]);
  readonly deliveryTimeList$ = of(["8-13", "13-18", "19-23"]);

  constructor(private _orderService: OrderService) {
  }

  onOrderFormSubmitted(orderForm: FormGroup): void {
    this._orderService.createOrder({
      product: orderForm.get('product')?.value,
      quantity: orderForm.get('quantity')?.value,
      shippingAddress: ({
        street: orderForm.controls['shipping'].value.shippingStreet,
        houseNumber: orderForm.controls['shipping'].value.shippingHouseNumber,
        zipCode: orderForm.controls['shipping'].value.shippingZipCode,
        cityId: orderForm.controls['shipping'].value.shippingCity,
        deliveryTime: orderForm.controls['shipping'].value.shippingDeliveryTime,
      }),
      invoiceAddress: ({
        addressLine: orderForm.controls['invoice'].value.invoiceAddressLine,
        extraAddressLine: orderForm.controls['invoice'].value.invoiceExtraAddressLine,
        vatNumber: orderForm.controls['invoice'].value.invoiceVatNumber,
        country: orderForm.controls['invoice'].value.invoiceCountry,
      })
    }).subscribe();

  }
}
