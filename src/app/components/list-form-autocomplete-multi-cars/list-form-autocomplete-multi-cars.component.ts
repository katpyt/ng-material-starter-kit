import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, map, Observable, reduce, shareReplay, startWith } from 'rxjs';
import { BrandModel } from '../../models/brand.model';
import { SecurityFeatureModel } from '../../models/security-feature.model';
import { ComfortFeatureModel } from '../../models/comfort-featurw.model';
import { CarService } from '../../services/car.service';
import { CarModelMap } from 'src/app/models/car-map.model';
import { CarModel } from 'src/app/models/car.model';

@Component({
  selector: 'app-list-form-autocomplete-multi-cars',
  styleUrls: ['./list-form-autocomplete-multi-cars.component.scss'],
  templateUrl: './list-form-autocomplete-multi-cars.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListFormAutocompleteMultiCarsComponent {

  readonly filtersForm: FormGroup = new FormGroup({
    brand: new FormControl(''),
    securityFeature: new FormControl(''),
    comfortFeature: new FormControl('')
  });

  readonly filterFormValues$ = this.filtersForm.valueChanges.pipe(startWith({ brand: '', securityFeature: '', comfortFeature: '' }));

  readonly brandsAll$: Observable<BrandModel[]> = this._carService.getAllBrands().pipe(shareReplay(1));
  readonly securityFeaturesAll$: Observable<SecurityFeatureModel[]> = this._carService.getAllSecurityFeatures().pipe(shareReplay(1));
  readonly comfortFeaturesAll$: Observable<ComfortFeatureModel[]> = this._carService.getAllComfortFeatures().pipe(shareReplay(1));

  readonly brandList$: Observable<BrandModel[]> = combineLatest([
    this.brandsAll$,
    this.filterFormValues$
  ]).pipe(
    map(([brands, filtersValues]) => {
      return brands.filter((brand) => brand.name.toLowerCase().includes(filtersValues.brand?.toLowerCase()))
    })
  );

  readonly securityFeatureList$: Observable<SecurityFeatureModel[]> = combineLatest([
    this.securityFeaturesAll$,
    this.filterFormValues$
  ]).pipe(
    map(([securityFeatures, filtersValues]) => {
      return securityFeatures.filter((securityFeature) => securityFeature.name.toLowerCase().includes(filtersValues.securityFeature.toLowerCase()))
    })
  );

  readonly comfortFeatureList$: Observable<ComfortFeatureModel[]> = combineLatest([
    this.comfortFeaturesAll$,
    this.filterFormValues$
  ]).pipe(
    map(([comfortFeatureList, filtersValues]) => {
      return comfortFeatureList.filter((comfortFeature) => comfortFeature.name.toLowerCase().includes(filtersValues.comfortFeature.toLowerCase()))
    })
  );

  readonly carsList$: Observable<CarModelMap[]> = combineLatest([
    this._carService.getAllCars().pipe(map((list) => { return list.filter((car) => parseInt(car.id) <= 45) })),
    this.filterFormValues$,
    this.brandsAll$,
    this.securityFeaturesAll$,
    this.comfortFeaturesAll$,
  ]).pipe(
    map(([carList, filterValues, brandList, securityFeatureList, comfortFeatureList]) => {
      const brandMap: Record<number, string> = brandList.reduce(
        (acc, currVal) => {
          return { ...acc, [currVal.id]: currVal.name };
        }, {}
      );
      const securityFeatureMap: Record<string, string> = securityFeatureList.reduce(
        (acc, currVal) => {
          return { ...acc, [currVal.id]: currVal.name };
        }, {}
      );
      const comfortFeatureMap: Record<string, string> = comfortFeatureList.reduce(
        (acc, currVal) => {
          return { ...acc, [currVal.id]: currVal.name };
        }, {}
      );

      return carList.filter((car) => {
        return filterValues.brand ? brandMap[+car.brandId] === filterValues.brand : true
      }).filter((car) => {
        return filterValues.securityFeature
          ? car.securityFeatureIds.length > 0
            ? car.securityFeatureIds?.map(cId => securityFeatureMap[cId])?.includes(filterValues.securityFeature) : []
          : true
      }).filter((car) => {
        return filterValues.comfortFeature
          ? car.comfortFeatureIds.length > 0
            ? car.comfortFeatureIds?.map(cId => comfortFeatureMap[cId])?.includes(filterValues.comfortFeature) : []
          : true
      }).map((car) => ({
        model: car.model,
        brandId: car.brandId,
        brandName: !isNaN(+car.brandId) ? brandMap[+car.brandId] : 'no brand found',
        securityFeatureName: car.securityFeatureIds.length > 0 ? car.securityFeatureIds?.map(cId => securityFeatureMap[cId]) : [],
        comfortFeatureName: car.comfortFeatureIds.length > 0 ? car.comfortFeatureIds?.map(cId => comfortFeatureMap[cId]) : [],
      }));

    })
  );

  constructor(private _carService: CarService) {
  }
}
