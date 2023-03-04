import { AfterViewInit, ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { combineLatest, map, Observable, of, share, shareReplay, tap } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-route-limit-single-products',
  styleUrls: ['./route-limit-single-products.component.scss'],
  templateUrl: './route-limit-single-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RouteLimitSingleProductsComponent implements AfterViewInit {

  readonly limit$: Observable<number> = this._activatedRoute.queryParams.pipe(
    map((queryParams) => queryParams['limit'] ? +queryParams['limit'] : 5),
    tap((limit) => this.toggleControlButtons.patchValue(limit)),
    shareReplay(1)
  );

  readonly toggleControlButtons = new FormControl(0);
  readonly toggleControlMenu = new FormControl(0);
  readonly toggleData$ = of([5, 10, 15]);

  readonly products$: Observable<ProductModel[]> = combineLatest([
    this._productService.getAllProducts(),
    this.limit$
  ]).pipe(
    map(([products, limit]) => {
      return products.slice(0, limit)
    })
  )

  onButtonClicked(limitValue: number) {
    this._router.navigate(
      [],
      { queryParams: { limit: limitValue }, relativeTo: this._activatedRoute }
    )
  }

  ngAfterViewInit(): void {
    this.toggleControlButtons.valueChanges.pipe(
      tap((limit) => this._router.navigate(
        [],
        { queryParams: { limit: limit } }
      ))
    ).subscribe();
  }

  // readonly queryParams$: Observable<Params> = combineLatest([
  //   this.toggleControlButtons.valueChanges,
  //   this._activatedRoute.params
  // ]).pipe(
  //   map(([toggleControlButtons, params]) => ({ limit: toggleControlButtons }))
  // );


  constructor(private _productService: ProductService, private _activatedRoute: ActivatedRoute, private _router: Router) {
  }
}
