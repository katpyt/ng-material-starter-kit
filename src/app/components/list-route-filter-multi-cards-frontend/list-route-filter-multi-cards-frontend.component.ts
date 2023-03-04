import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
import { BrandModel } from '../../models/brand.model';
import { ComfortFeatureModel } from '../../models/comfort-featurw.model';
import { CarModel } from '../../models/car.model';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-list-route-filter-multi-cards-frontend',
  styleUrls: ['./list-route-filter-multi-cards-frontend.component.scss'],
  templateUrl: './list-route-filter-multi-cards-frontend.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ListRouteFilterMultiCardsFrontendComponent implements AfterViewInit {


  readonly brands$: Observable<BrandModel[]> = this._carService.getAllBrands().pipe(
    tap((brands) => brands.forEach(brand => {
      const brandForm = this.filterForm.controls['brandIds'] as FormGroup;
      brandForm.addControl(brand.id, new FormControl(false))
    }))
  );  
  // readonly comfortFeatures$: Observable<ComfortFeatureModel[]> = this._carService.getAllComfortFeatures();
  readonly comfortFeatures$: Observable<ComfortFeatureModel[]> = this._carService.getAllComfortFeatures().pipe(
    tap((cfIds) => cfIds.forEach(cf => {
      const cfForm = this.filterForm.controls['cfIds'] as FormGroup;
      cfForm.addControl(cf.id, new FormControl(false))
    }))
  );

  readonly filterForm: FormGroup = new FormGroup({
    brandIds: new FormGroup({}),
    cfIds: new FormGroup({})
  });

  readonly filterValues$: Observable<{ brands: Set<string>, comfortFeatures: Set<string> }> = this._activatedRoute.queryParams.pipe(
    map(params => ({
      brands: new Set<string>(params['brand'] === undefined ? [] : params['brands'].split(',')),
      comfortFeatures: new Set<string>(params['comfortFeature'] === undefined ? [] : params['comfortFeature'].split(',')),
    }))
  );

  readonly carsList$: Observable<CarModel[]> = combineLatest([
    this._carService.getAllCars(),
    this.filterValues$
  ]).pipe(
    map(([cars, params]) =>
      // if (selectedBrands.size <= 0 && selectedComfortFeatures.size <= 0) return carList;

      // console.log("params['brand'] [" + selectedBrands + "]");
      // console.log("params['comfortFeature'] [" + selectedComfortFeatures + "]");

      // return cars.filter(car => {
      //   return selectedBrands.has(car.brandId)
      // }).filter(car => {
      //   return car.comfortFeatureIds.find((cId) => selectedComfortFeatures.has(cId)
      //   )
      // });

      cars.filter(car => params.brands.size === 0 || params.brands.has(car.brandId)
      ).filter(
        (car) => params.comfortFeatures.size === 0 || car.comfortFeatureIds.find((cId: string) => params.comfortFeatures.has(cId))
      )
    )
  );





  // readonly selectedBrands: BehaviorSubject<Set<string>> = new BehaviorSubject<Set<string>>(new Set());
  // readonly selectedBrands$: Observable<Set<string>> = this.selectedBrands.asObservable().pipe(
  //   tap((data) => {
  //     this._router.navigate(
  //       [],
  //       {
  //         relativeTo: this._activatedRoute,
  //         queryParams: { brand: this.selectedBrands.toString(), comfortFeature: this.queryParams$.pipe(map(data => data['comfortFeature'])) },
  //         queryParamsHandling: 'merge'
  //       }
  //     );
  //   })
  // );

  // readonly selectedComfortFeatures: BehaviorSubject<Set<string>> = new BehaviorSubject<Set<string>>(new Set());
  // readonly selectedComfortFeatures$: Observable<Set<string>> = this.selectedComfortFeatures.asObservable();


  // readonly selectedBrands: BehaviorSubject = [];
  // selectedComfortFeatures: string[] = [];

  // public queryParams$: Observable<Params> = this._activatedRoute.queryParams.pipe(
  //   map(queryParams => ({ brand: queryParams['brand'], comfortFeature: queryParams['comfortFeature]'] }))
  // );



  onChangeBrand(brand: BrandModel, isSelected: boolean) {
    this.filterValues$.pipe(
      take(1),
      tap(
        (data) => {
          const newBrands = new Set(data.brands);
          isSelected ? newBrands.add(brand.id) : newBrands.delete(brand.id);

          this._router.navigate(
            [],
            {
              relativeTo: this._activatedRoute,
              queryParams: {
                brands: newBrands,
                comfortFeatures: data.comfortFeatures
              }
            })
        })
    ).subscribe()
    // if (event.checked) {
    //   this.selectedBrands$.pipe(
    //     take(1),
    //     tap(
    //       (data) => this.selectedBrands.next(data.add(event.source.value))
    //     )
    //   ).subscribe()
    // }
    // else {
    //   // const index = this.selectedBrands.findIndex(element => element === event.source.value)
    //   // this.selectedBrands.splice(index, 1);
    //   this.selectedBrands$.pipe(
    //     take(1),
    //     tap(
    //       (data) => {
    //         const newValue = data;
    //         newValue.delete(event.source.value);
    //         this.selectedBrands.next(newValue);
    //       }
    //     )
    //   ).subscribe()
    // }
  }

  onChangeComfortFeature(comfortFeature: ComfortFeatureModel, isSelected: boolean) {
    this.filterValues$.pipe(
      take(1),
      tap(
        (data) => {
          const newComfortFeatures = new Set(data.comfortFeatures);
          isSelected ? newComfortFeatures.add(comfortFeature.id) : newComfortFeatures.delete(comfortFeature.id);

          this._router.navigate(
            [],
            {
              relativeTo: this._activatedRoute,
              queryParams: {
                brands: data.brands,
                comfortFeatures: newComfortFeatures
              }
            })
        })
    ).subscribe()
  }
  // if (event.checked) {
  //   this.selectedComfortFeatures.push(event.source.value);
  // }
  // else {
  //   const index = this.selectedComfortFeatures.findIndex(element => element === event.source.value)
  //   this.selectedComfortFeatures.splice(index, 1);
  // }

  // this.selectedComfortFeatures.sort((a, b) => {
  //   return +a > +b ? 1 : -1
  // });

  // this._router.navigate(
  //   [],
  //   {
  //     relativeTo: this._activatedRoute,
  //     queryParams: { comfortFeature: this.selectedComfortFeatures.flat().toString() },
  //     queryParamsHandling: 'merge'
  //   }
  // );


  constructor(private _carService: CarService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }

  ngAfterViewInit(): void {
    this.filterForm.valueChanges.pipe(
      tap(console.log)
    ).subscribe()
  }
}
