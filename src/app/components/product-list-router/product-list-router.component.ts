import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-list-router',
  styleUrls: ['./product-list-router.component.scss'],
  templateUrl: './product-list-router.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProductListRouterComponent {
}
