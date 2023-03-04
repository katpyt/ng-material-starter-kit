import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { CartModel } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-details',
  styleUrls: ['./cart-details.component.scss'],
  templateUrl: './cart-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CartDetailsComponent {
  readonly cartDetails$: Observable<CartModel> = this._activatedRoute.params.pipe(switchMap(data => this._cartService.getCart(data['id'])));

  constructor(private _cartService: CartService, private _activatedRoute: ActivatedRoute) {
  }
}
