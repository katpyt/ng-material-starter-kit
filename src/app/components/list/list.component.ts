import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { FirstDialogComponent } from '../first-dialog/first-dialog.component';

@Component({
  selector: 'app-list',
  styleUrls: ['./list.component.scss'],
  templateUrl: './list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {
  constructor(private _dialog: MatDialog, private _productService: ProductService) {

  }

  onAddButtonClicked() {
    // this._dialog.open(FirstDialogComponent, { 
    //   data: {title: 'my new title'}
    // });
    this._productService
      .getProduct('2')
      .pipe(  
        tap((product) => this._dialog.open(FirstDialogComponent, { 
          data: { title: product.title }
        })
        )
        //tap => for side effects, it doesnt change value which is returned by the stream/Observable, 
        //it is function, it is called every time new value is emittted
    ).subscribe();
  }
}
