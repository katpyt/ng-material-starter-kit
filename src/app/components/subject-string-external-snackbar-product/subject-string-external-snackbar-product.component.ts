import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { SnackBarModel } from '../../models/snack-bar.model';
import { SnackBarService } from '../../services/snack-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar'
import { SnackBarMetadataModel } from 'src/app/models/snack-bar-metadata.model';

@Component({
  selector: 'app-subject-string-external-snackbar-product',
  styleUrls: ['./subject-string-external-snackbar-product.component.scss'],
  templateUrl: './subject-string-external-snackbar-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class SubjectStringExternalSnackbarProductComponent {
  private _productListSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public productList$: Observable<SnackBarModel[]> = this._productListSubject.asObservable().pipe(switchMap(() => this._snackBarService.getAll()));
  private _productMetadataSubject: Subject<string> = new Subject<string>();
  public productTitle$: Observable<string> = this._productMetadataSubject.asObservable();
  // public productMetadata$: Observable<number> = this._productMetadataSubject.asObservable()
  //   .pipe(
  //     switchMap(x => this._snackBarService.getProductMetadata(x)),
  //   )
  //   .pipe(
  //     map( data => data[0].stock),
  //     filter ( data => data < 10)
  //   );
    // .pipe(
    //   switchMap(x => this._snackBarService.getProductMetadata(x)),
    //   filter( x => x.stock < 20)
    // )
    // .pipe(
    //   map( data => <number>data.stock))
    //   .pipe(map(
    //     item => {
    //       return item;
    //     }
    //   ) 
    // );

    
  constructor(private _snackBarService: SnackBarService, private _snackBar: MatSnackBar) {
  }

  openSnackBar(message: string) {
    this._snackBar.open(message);
  }

  onProductClicked(id: string) {
    console.log("id ["+id+"]");
    // // this._productMetadataSubject.next(undefined as any);
    // this._productMetadataSubject.next(id);
    
    let stock = this._snackBarService.getProductMetadata(id)
    .pipe(map( data => { return <number>data[0].stock}));
    
    console.log(<number>(<unknown>stock));

    if (<number>(<unknown>stock) < 10) {
      this.openSnackBar('Hurry up! There are only ' + <number>(<unknown>stock)  + ' left!');
    }
    // this.openSnackBar('Hurry up! There are only ' +  + ' left!');

    // this.stock = this._snackBarService.getProductMetadata(id)
    //  .pipe(
    //   map( data => <number>data.stock))
    //   .pipe(map(
    //     item => {
    //       return item;
    //     }
    //   ) );

      // console.log(JSON.stringify(this.stock));
    // this.openSnackBar('Hurry up! There are only ' + JSON.stringify (this.productMetadata$) + ' left!');
  }
}

