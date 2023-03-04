export interface OrderModel {
  readonly product: OrderProductModel[];
  readonly quantity: number;
  readonly shippingAddress: ShippingAddressModel;
  readonly invoiceAddress: InvoiceAddressModel;
}

export interface OrderProductModel {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly colorId: string;
  readonly storeId: string;
}

export interface ShippingAddressModel{
  readonly street: string;
  readonly houseNumber: number;
  readonly zipCode: string;
  readonly cityId: CityModel;
  readonly deliveryTime: string;
}

export interface CityModel{
  readonly id: string;
  readonly name: string;
}

export interface InvoiceAddressModel{
  readonly addressLine: string;
  readonly extraAddressLine: string;
  readonly vatNumber: string;
  readonly country: CountryModel[];
}

export interface CountryModel{
  readonly id: string;
  readonly name: string;
}